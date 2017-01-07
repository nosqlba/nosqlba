<?php 

if( count($_POST) > 0 
	&& array_key_exists('nome', $_POST) )
{
    if( !empty($_POST['nome']) 
		&& !empty($_POST['email'])
		&& !empty($_POST['telefone'])
		&& !empty($_POST['mensagem']) )
	{
		$data = $_POST;
	    $destino = 'contato@i2u.com.br';
	    #$destino = 'silasrm@gmail.com';

	    $messageFooter = "\r\n\r\n";
	    $messageSubject = 'Contato via Site';

	    $messageBody = $data['mensagem'];
	    $messageBody .= "<hr />";
	    $messageBody .= "IP: " . $_SERVER['REMOTE_ADDR'];

	    $headers="From: {$destino}\n";
	    $headers .= "Reply-To: {$destino}\n";
	    $headers .= "Return-Path: {$destino}\n";
	    $headers .= "MIME-Version: 1.0\n";
	    $headers .= "Content-Type: text/html; charset=UTF-8\n";

	    if( mail($data['email'],$messageSubject,$messageBody,$headers) )
		{
			echo json_encode(array('success' => true));
		}
		else
		{
			echo json_encode(array('success' => false));
		}
		die;
	}
	else
	{
		echo json_encode(array('success' => -1));
		die;
	}
}

echo json_encode(array('success' => null));