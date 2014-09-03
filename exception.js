var Exception = (function(my) {

    var
    $exceptionContainer,
    $exceptionMessageContainer,
    $exceptionStackLink,
    $exceptionStackContainer;

    my.display = function($message, $stack) {
        $(".exception-message").html($message);
        $.each($stack, function(index, stackElt) {
            $(".exception-stack").append("\n"+stackElt.className+"\t"+stackElt.methodName+"\t"+stackElt.lineNumber+"\n");
        });

        $exceptionContainer.dialog({
            height: 350,
            width: 700,
            modal: true
        });
    }

    my.init = function() {
        $exceptionContainer = $("<div id='exception'></div>");
        $exceptionMessageContainer = $("<div class='exception-message'></div>");
        $exceptionStackLink = $("<a class='show-stack'>Stack trace</a>");
        $exceptionStackContainer = $("<div class='exception-stack'></div>");

        $exceptionContainer.append($exceptionMessageContainer);
        $exceptionContainer.append($exceptionStackLink);
        $exceptionContainer.append($exceptionStackContainer);
        $("body").append($exceptionContainer);
    }

    return my;

})(Exception || {});

$(function() {
    Exception.init();
});
