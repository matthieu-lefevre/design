
var Notification = (function(my) {

    var $message = null;

    my.setSuccessMessage = function(message) {
        $message = $("<div class='message success'>"+message+"</div>");
    }

    my.setFailureMessage = function(message) {
        $message = $("<div class='message failure'>"+message+"</div>");
    }

    my.displayMessage = function() {
        $("body").append($message);
        $message.fadeIn('slow');
        window.setTimeout(function() {
            $message.fadeOut('slow');
            window.setTimeout(function() {
                $message.remove();
            }, 2000);
        }, 4000);
    }

    my.init = function() {

    }

    return my;

})(Notification || {});

$(function() {
    Notification.init();
});
