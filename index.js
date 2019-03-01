


$(window).bind("load", function() {
    var btn = document.getElementById("btn")

    var num = document.getElementById("num").innerText;
    
    var timer = null;
    
    btn.addEventListener("click", countdown);
    
    function countdown() {
        btn.disabled = true;
        if (timer == null) {
            timer = setInterval(decrease, 1000);
        }
    }
    
    function decrease() {
        if (num !== 0) {
            num = num - 1;
            document.getElementById("num").innerText = num;
        } else {
            document.getElementById("num").innerText = "Happy Birthday Kelsey!";
            document.getElementById("text").style.visibility = "visible"
            document.getElementById("pics").style.visibility = "visible"
        }
    }




});
