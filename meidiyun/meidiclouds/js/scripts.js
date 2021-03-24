jQuery(document).ready(function () {

    // doubleTapToGo
    jQuery('#dropdown li:has(ul)').doubleTapToGo();

    // tabs
    jQuery(".tabs ul").tabs("div.panes > div");

    // tooltips
    jQuery(".socialbox img[title]").tooltip();
    jQuery("abbr[title]").tooltip();

    // add span to headlines
    jQuery('h1, h2, h3, h4, h5, h6').wrapInner('<span></span>');

    // slider portfolioteaser
    jQuery(document).ready(function () {
        jQuery('.portfolioteaser').bxSlider({
            mode: 'horizontal',
            auto: false,
            pause: 4000,
            autoStart: false,
            autoDirection: 'next',
            autoHover: true,
            autoDelay: 0,
            startSlide: 0,
            randomStart: false,
            slideSelector: '',
            infiniteLoop: false,
            captions: false,
            ticker: false,
            video: false,
            useCSS: true,
            controls: true,
            nextText: '[nbsp]',
            prevText: '[nbsp]',
            nextSelector: null,
            prevSelector: null,
            autoControls: true,
            pager: false,
            minSlides: 1,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: '295',
            slideMargin: 10,
            adaptiveHeight: false,
            hideControlOnEnd: false

        });
    });

    // slider nachrichtenteaser
    jQuery(document).ready(function () {
        jQuery('.nachrichtenteaser').bxSlider({
            mode: 'horizontal',
            auto: false,
            pause: 4000,
            autoStart: false,
            autoDirection: 'next',
            autoHover: true,
            autoDelay: 0,
            startSlide: 0,
            randomStart: false,
            slideSelector: '',
            infiniteLoop: false,
            captions: false,
            ticker: false,
            video: false,
            useCSS: true,
            controls: true,
            nextText: '[nbsp]',
            prevText: '[nbsp]',
            nextSelector: null,
            prevSelector: null,
            autoControls: true,
            pager: false,
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            slideWidth: '255',
            slideMargin: 10,
            adaptiveHeight: false,
            hideControlOnEnd: false

        });
    });

});


// jPanelMenu
var jPM = jQuery.jPanelMenu({
    menu: '#off_canvas',
    trigger: '#nav-open-topleft-btn'
});
jPM.on();