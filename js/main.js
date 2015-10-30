var sizeTri = function() {

    var holder = window.getComputedStyle(document.getElementById("resized"), null);
    var width = parseInt(holder.getPropertyValue("width"));
    var leftPoint = width * .2;
    var rightPoint = width * .8;
    document.getElementById("triangle-up").style.borderLeft = "" + leftPoint + "px solid transparent";
    document.getElementById("triangle-up").style.borderRight = "" + rightPoint + "px solid transparent";

}



window.onload = function() {

    sizeTri();


}

window.addEventListener('resize', function(event) {

    sizeTri();

});

