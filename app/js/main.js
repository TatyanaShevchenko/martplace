$(function() {
    $('.featured-product-slider').slick({

    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        grid: false,
        prefix: "$"
    });
    $('.followers-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });

    $(".rating").rateYo({
        "rating": 4.6,
        "starWidth": "15px",
        "normalFill": "transparent",
        "ratedFill": "#ffc000",
        "readOnly": true,

    });

    $(".rating-mini").rateYo({
        "rating": 4.6,
        "starWidth": "12px",
        "normalFill": "#eff1f5",
        "ratedFill": "#ffc000",
        "readOnly": true,

    });

    $(".list-icon").on('click', function() {
        $(".product__item-mini").addClass('product__item-page-list');
        $(".list-icon").addClass('active');
        $(".grid-icon").removeClass('active');

    });

    $(".grid-icon").on('click', function() {
        $(".product__item-mini").removeClass('product__item-page-list');
        $(".grid-icon").addClass('active');
        $(".list-icon").removeClass('active');
    });

    $(".menu__btn").on('click', function() {
        $(".menu__list-item").slideToggle();
    });

    $(".header__btn-menu").on('click', function() {
        $(".header__box").toggleClass('active');
    });

    $('.product__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

 var mixer = mixitup('.new-items__box');
});
