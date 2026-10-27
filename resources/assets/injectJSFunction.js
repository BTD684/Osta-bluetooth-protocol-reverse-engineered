setInterval(function () {
    var select = document.getElementsByTagName("select");
    if(select && select.length > 0){
        for(var i = 0; i < select.length; i++){
            select[0].style.display = "none";
        }
    }
}, 500);