$(document).ready(function() {
    // Main__sidle
    $(".main__slide").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: 3000,
        autoplayHoverPause: true

    });
    //Product box slider
    $(".product-home .product-box--list").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            601: {
                items: 2
            },
            1000: {
                items: 4
            }
        }

    });
    // Testimonials-box__slider
    $(".testimonials-box__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        autoplay: 3000,
        autoplayHoverPause: true

    });
    // News-box__list
    $(".news-box__list").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });
    // Brand-box__list
    $(".brand-box__list").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    });
    // product-detail__images--gallery
    $(".product-detail__images--gallery").owlCarousel({
        loop: false,
        margin: 13,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }

    });
});