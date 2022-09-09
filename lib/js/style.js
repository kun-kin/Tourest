// $(window).scroll(function() {
//     var headerHeight = $(".header").outerHeight();
//     // kiểm tra điều kiện > header thì mới addClass 
//     if ($(window).scrollTop() > headerHeight) {
//         $('.header').addClass('white-bg');
//         // $('.header').addClass('header-sticky');
//         $('.contacthotel').slideUp();
//         $('.header-middle').addClass('animated');
//     } else {
//         $('.header').removeClass('white-bg');
//         // $('.header').removeClass('header-sticky');
//         $('.contacthotel').slideDown();
//         $('.header-middle').removeClass('animated');
//     }
// });
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {

    $('#dateto').datepicker();

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.banner-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        items: 1
    })

    $('.review-slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        items: 1
    })


    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    $(".custom-select").click(function() {
        $(this).children('.nice-select').toggleClass('open');
    })
    $(document).mouseup(function(e) {
        var eti = $(".custom-select .nice-select");
        if (!eti.is(e.target) && eti.has(e.target).length === 0) {
            eti.removeClass('open');
        }
    });

    $("#list").click(function() {
        $('.list-tour-group .tour-group-item').addClass('list-group-item');
        $('.tours-sidebar').css("display", "block");
        $('.tours-main').removeClass('tour-main-list');
        $('.tours .pagination').css("justify-content", "flex-end");
    })
    $("#grid").click(function() {
        $('.list-tour-group .tour-group-item').removeClass('list-group-item');
        $('.list-tour-group .tour-group-item').addClass('grid-group-item');
        $('.tours-sidebar').css("display", "none");
        $('.tours-main').addClass('tour-main-list');
        $('.tours .pagination').css("justify-content", "center");
    })

    $(".nice-select").click(function() {
        $(this).toggleClass('open');
        $('.nice-select').not($(this)).removeClass('open');
    })
    $(document).mouseup(function(e) {
        var eti = $(".nice-select");
        if (!eti.is(e.target) && eti.has(e.target).length === 0) {
            eti.removeClass('open');
        }
    });

    $(".navbar-toggler").click(function() {
        $(this).toggleClass('collapsed');
        $('.navbar-collapse').toggleClass('show');
        $('.navbar-collapse').slideToggle();
    })

    $(".choose-option .list .option").click(function() {
        var dataValue = $(this).attr("data-value");
        $(this).parents('.list').parents('.choose-option').children('.current').html(dataValue);
    })


});