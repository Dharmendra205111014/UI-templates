var num =0;
(function(){
    var n = new notify();
    //Add click event to the button
    document.getElementById("button").addEventListener("click", function(){
        var message = 'message '+ (num++);
        console.log(message);
        n.display(message);
    });
})();