$(document).ready(function(){


  $("section#photos").randomize(".image");

  $('.image').hover( function(e) {
    $('.image.highlight').removeClass("active");
  });

  $('.image.highlight').hover( function(e) {
    $('.image.highlight').addClass("active");
  });

  $('.image').on('click', function (e) {
    if ( $('body').hasClass("singleview") ) {
      var img_count = $(this).find('img').length;
      console.log(img_count);
      if ( img_count > 1 )  {
        if ( $(this).find('img:nth-child(1)').is(':visible') ) {
          $(this).find('img:nth-child(1)').hide();
          $(this).find('img:nth-child(2)').show();
        } else {
          $(this).find('img:nth-child(2)').hide();
          $(this).find('img:nth-child(1)').show();

        }
      } else {
        $('.image').removeClass("fullsize");
        $('body').removeClass("singleview");
        $('body').addClass("overview", 0, "easeInOutQuad" );

      }
    } else {
      $('.image').parent().removeClass("fullsize");
      $('body').addClass("singleview");
      $('body').removeClass("overview");
      $(this).addClass("fullsize", 0, "easeInOutQuad"  );
    }
  });
  $('#overlay').on('click', function (e) {
      $('.image').removeClass("fullsize");
      $('body').removeClass("singleview");
      $('body').addClass("overview", 0, "easeInOutQuad" );
  });
});

// from http://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery
(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });

      $this.remove(childElem);

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);

  });
}
})(jQuery);