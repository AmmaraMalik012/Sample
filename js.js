$(document).ready(function() {
    $('#Toggle_Nav_Icon').click(function() {
        $('#First').slideToggle(1500);
    });
    $('#Notification_Button').click(function() {
        $('#NT_Bar').slideUp(1500);
    });
    $('.your-class').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        // responsive: [{
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 369,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });
});