$(document).ready(() => {

    $('.photo-container').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

    $('.burger').click(() => {
        $('.header').toggleClass('menu-open')
    });

    $('#navigation, #main-info, .burger-item').click(() => {
            $('#navigation').removeClass('menu-open')
    });

    $('#error-btn').click(() => {
        let name = $('#name');
        let email = $('#email');
        let number = $('#number');
        let error = $('.error-text');

        name.css('border-color', 'rgba(28, 46, 61, 0.3)');
        email.css('border-color', 'rgba(28, 46, 61, 0.3)');
        number.css('border-color', 'rgba(28, 46, 61, 0.3)');


        let hasError = false;
        error.hide();
        if (!name.val()) {
            error.show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!email.val()) {
            error.show();
            email.css('border-color', 'red');
            hasError = true;
        }
        if (!number.val()) {
            error.show();
            number.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&email=' + email.val() + '&number=' + number.val(),
                success: () => {
                    alert("Скоро мы свяжемся с Вами!")
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        } else {
            error.show();
        }
    })
    $('.photo-gallery').magnificPopup({
        type: 'image'
    });
})