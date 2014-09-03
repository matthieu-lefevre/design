.message {
    width: 250px;
    height: 35px;
    display: none;
    border-radius: 5px;
    position: fixed;
    z-index: 15;
    top: 20px;
    left: 40%;
    line-height: 35px;
    padding: 0;
    text-align: center;
}
.success {
    background-color: #90EE90;
    border: 2px #090 solid;
    color: #333;
}
.failure {
    background-color: #f66;
    border: 2px #f33 solid;
    color: #fff;
}


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
