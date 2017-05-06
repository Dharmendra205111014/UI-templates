var num =0;
(function(){
    var n = new notify('bottomRight');
    //Add click event to the button
    document.getElementById("button").addEventListener("click", function(){
        var message = 'message '+ (num++);
        console.log(message);
        var position = getRadioButtonValue('position');
        n.display(message, position);
    });
})();

function getRadioButtonValue(name) {
    var radio = document.getElementsByName(name);
    var radio_value;
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            return radio[i].value;
        }
    }
    return 'topRight';
}
