$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function(){
  console.log("I know jquery");
  $('#administrator').hover(function(){
    $(this).addClass('z-depth-5');
  },function(){
    $(this).removeClass('z-depth-5');
  });
  $('#users').hover(function(){
    $(this).addClass('z-depth-5');
  },function(){
    $(this).removeClass('z-depth-5');
  });
  $('#resturant').hover(function(){
    $(this).addClass('z-depth-5');
  },function(){
    $(this).removeClass('z-depth-5');
  });
});
