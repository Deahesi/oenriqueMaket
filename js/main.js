
let TopScr = '0px';

$(document).ready(function () {
    function toElement(event, TopM = '0px') {
        event.preventDefault();
        console.log(TopM);
        $('html, body').animate({ scrollTop: TopM }, 1000);
    }


    const slide = (e, innerBoxes) => {
        console.log(e.target.classList.contains('third'));
        for (element of innerBoxes) {
            element.classList.remove('active-slider');
        }
        e.target.classList.add('active-slider');
        if (e.target.classList.contains('first')) {
            for (elem of $('.review')) {
                elem.classList.remove('active-slider-review');
            }
            $('.review_1').addClass('active-slider-review');
        } else if (e.target.classList.contains('second')) {
            for (elem of $('.review')) {
                elem.classList.remove('active-slider-review');
            }
            $('.review_2').addClass('active-slider-review');
        } else if (e.target.classList.contains('third')) {
            for (elem of $('.review')) {
                elem.classList.remove('active-slider-review');
            }
            $('.review_3').addClass('active-slider-review');
        }
    }

    function toggleBurger() {
        $('.header-prev').toggleClass('burger__header');
        $('.header').toggleClass('burger__header');
        $('.menu').toggleClass('burger-active');
    }

    let burgerOn = false;

    if ($(window).width() > 450) {
        $('.menu').removeClass('burger-menu');
        burgerOn = false;
    } else if ($(window).width() < 450) {
        $('.menu').addClass('burger-menu');
        burgerOn = true;
    }

    $('#burger-box').on('click', function (e) {
        if (burgerOn) {
            toggleBurger();
        }
    })

    $('.slider__rect').on('click', function (e) {
        slide(e, document.querySelectorAll('.slider__rect'));
    })

    $('#home').on('click', function (e) {
        toElement(e);
        if (burgerOn) {
            toggleBurger();
        }
    });
    $('#about').on('click', function (e) {
        TopScr = $('.section-first').css('height') + 'px';
        toElement(e, TopScr);
        if (burgerOn) {
            toggleBurger();
        }
    });
    $('#service').on('click', function (e) {
        TopScr = (parseInt($('.section-first').css('height')) + parseInt($('.about__box').css('height'))) + 'px';
        toElement(e, TopScr);
        if (burgerOn) {
            toggleBurger();
        }
    });
    $('#portfolio').on('click', function (e) {
        TopScr = (parseInt($('.section-first').css('height')) + parseInt($('.about__box').css('height'))
            + parseInt($('.service__box').css('height'))) + parseInt($('.section-fourth').css('height')) + 'px';
        toElement(e, TopScr);
        if (burgerOn) {
            toggleBurger();
        }
    });
    $('#contact').on('click', function (e) {
        TopScr = (parseInt($('body').css('height'))) - (parseInt($('.section-seventh').css('height')) + parseInt($('.footer').css('height'))) + 'px';
        toElement(e, TopScr);
        if (burgerOn) {
            toggleBurger();
        }
    });


});

$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 100) {
        if (($('.menu').hasClass('burger-active')) == false) {
            $(".header").css({ top: '0', position: 'relative', backgroundColor: '', paddingTop: '', alignItems: '', border: '', borderRadius: '', width: '' });
        }
        $('.logo').css({ flexDirection: 'column', marginLeft: '', });
    }
    else if (top > 100) {
        $(".header").css({
            top: '10px',
            position: 'fixed',
            maxWidth: '1600px',
            width: '60%',
            backgroundColor: '#dedede',
            paddingTop: '0',
            alignItems: 'center',
            border: '1px solid #fafafa',
            borderRadius: '10px',
        });

        $('.logo').css({
            flexDirection: 'row',
            marginLeft: '30px',
        });

        $('.header__nav').css({
            marginRight: '30px',
        });
    }


    if (top < parseInt($('.section-first').css('height'))) {
        $('#about').removeClass('active');
        $('#service').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#home').addClass('active');
    } else if (top >= parseInt($('.section-first').css('height'))) {
        $('#home').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#service').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
    }
    if (top >= (parseInt($('.section-first').css('height')) + parseInt($('.about__box').css('height')))) {
        $('#about').removeClass('active');
        $('#home').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#service').addClass('active');
    }
    if (top >= (parseInt($('.section-first').css('height')) + parseInt($('.about__box').css('height'))
        + parseInt($('.service__box').css('height'))) + parseInt($('.section-fourth').css('height'))) {
        $('#about').removeClass('active');
        $('#home').removeClass('active');
        $('#service').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');
    }
    if (top >= (parseInt($('body').css('height'))) - (parseInt($('.section-seventh').css('height')) + parseInt($('.footer').css('height')))) {
        $('#about').removeClass('active');
        $('#home').removeClass('active');
        $('#service').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');
    }



});

