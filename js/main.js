var sizeTri = function() {

    var holder = window.getComputedStyle(document.getElementById("resized"), null);
    var width = parseInt(holder.getPropertyValue("width"));
    var leftPoint = width * .2;
    var rightPoint = width * .8;
    document.getElementById("triangle-up").style.borderLeft = "" + leftPoint + "px solid transparent";
    document.getElementById("triangle-up").style.borderRight = "" + rightPoint + "px solid transparent";

}



window.onload = function() {

    
    //sizeTri();

    $(function() {
    //caches a jQuery object containing the header element
    var header = $(".some");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('some').addClass("none");
        } else {
            header.removeClass("none").addClass('some');
        }
    });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});
    


}

window.addEventListener('resize', function(event) {

    sizeTri();

});

