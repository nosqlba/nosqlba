jQuery(document).ready(function(){
  $('a[href*=#]').click(function(event){
    event.preventDefault();

    if( $(this).attr('href') == "#" )
    {
      scrollTo('body');
    }
    else
    {
      scrollTo($(this).attr('href'));
    }
  });

  /**
  $('div.info-palestra-left').popover({
    content: 'sss'
  });
   */
  
  $('div.info-palestra-left').mouseenter(function(){
    var $this = $(this);
    $this.popover({
      placement: 'right',
      title: 'Descrição',
      content: $this.find('div.info-palestra-dados').html()
    });
    $this.popover('show');

  }).mouseleave(function(){
    var $this = $(this);

    $this.popover('hide');
  });
  
  $('div.info-palestra-right').mouseenter(function(){
    var $this = $(this);
    $this.popover({
      placement: 'left',
      title: 'Descrição',
      content: $this.find('div.info-palestra-dados').html()
    });
    $this.popover('show');

  }).mouseleave(function(){
    var $this = $(this);

    $this.popover('hide');
  });

  //*
  var navigations = $('#menu-box'),
  pos = navigations.offset();
  
  $(window).scroll(function(){
    
    if($(this).scrollTop() > pos.top+navigations.height() && navigations.hasClass('default'))
    {
      
      navigations.fadeOut('fast', function(){
                      
        $(this).removeClass('default').addClass('stabled').fadeIn('fast');
      });
      
    }
    else if($(this).scrollTop() <= pos.top && navigations.hasClass('stabled'))
    {
      
      navigations.fadeOut('fast', function(){
                      
        $(this).removeClass('stabled').addClass('default').fadeIn('fast');
      });

    }
    
  });
  //*/
  $("#carousel").rcarousel(
    {
      visible: 5,
      step: 5,
      speed: 600,
      auto: {
        enabled: true
      },
      width: 155,
      height: 90,
      pageLoaded: pageLoaded
    }
  );

  $(document).bind('keydown', 'left', function(){
    $("#carousel").rcarousel('prev');
  });

  $(document).bind('keydown', 'right', function(){
    $("#carousel").rcarousel('next');
  });

  $('#contato form').submit(function(event){
    event.preventDefault();
    var data = $(this).serialize();

    $('#contato form dl.botao dt').addClass('ajax-load')
                                  .html('');

    $.ajax({
      type: 'POST',
      url: 'envia.php',
      data: data,
      success: function(result){
        $('#contato form dl.botao dt').removeClass('ajax-load');

        if( result.success == true ) {
          //alert('Mensagem enviado com sucesso!');
          $('#contato form dl.botao dt').addClass('msg-ok')
                                        .html('Mensagem enviado com sucesso!');
        }
        else if( result.success == -1 ) 
        {
          //alert('É necessário informar todos os campos.');
          $('#contato form dl.botao dt').addClass('msg-erro')
                                        .html('Preencha todos os campos.');
        }
        else
        {
          //alert('Houve algum problema ao enviar a mensagem. Favor encaminhe para: contato@i2u.com.br');
          $('#contato form dl.botao dt').addClass('msg-erro')
                                        .html('Houve algum problema ao enviar a mensagem. <br />Favor encaminhe para: contato@i2u.com.br');
        }
      },
      dataType: 'json'
    });

    return false;
  });
});

function scrollTo(id) {
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 2000);
}

function pageLoaded( event, data ) {
  $( "a.bullet-on", "#pagination" ).removeClass( "bullet-on" );

  $( "a", "#pagination" ).eq( data.page ).addClass( "bullet-on" );
}