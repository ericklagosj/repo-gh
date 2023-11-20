// carousel.js

$(document).ready(function () {
    $('.banner-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000, // Tiempo en milisegundos entre cada imagen
        dots: true, // Muestra los puntos de navegación
        arrows: false, // Oculta las flechas de navegación
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
