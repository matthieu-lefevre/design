var FadeEffect = (function(my) {

    var overlay = $("<div class='overlay'></div>");

    my.in = function() {
        overlay.fadeIn('slow');
    }

    my.out = function() {
        overlay.fadeOut('slow');
    }

    my.init = function() {
        $("body").append(overlay);
    }

    return my;

})(FadeEffect || {});

$(function () {
    FadeEffect.init();
});
