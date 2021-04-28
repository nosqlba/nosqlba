//função para abrir o menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

//função para fechar o menu
$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

//essa função faz com que um botão lateral(to-top) apareça a medida que o usuário usar scroll na pagina
var fixed = false;
$(document).scroll(function () {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            $('#to-top').show("slow", function () {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function () {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});

//Deixa a scroll de click do menu mais suave (quando usúario clicar em algum item no menu essa função é executada)
$(function () {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//Owl Carousel
$("#id-owl-carousel").owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
    items: 4,
    itemsMobile: [479, 1],
    stopOnHover: true,
    pagination: true,
    navigationText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"]
});