;(function(){

  "use strict";

  $(document).on("click", ".js-nico3", function(event){

    var $self = $(this);
    var $column = $self.closest(".col-sm-4");
    var $container = $self.closest(".js-greetings");
    $container.find(".col-sm-4").fadeOut(function(){
      $column.find(".panel").not($self).hide();
      $column.removeClass("col-sm-4").addClass("col-sm-12 text-center").fadeIn();
    });

  });

  var counter = 0, // to keep track of current slide
      $items = $('.slider figure'), // a collection of all of the slides, caching for performance
      numItems = $items.length; // total number of slides

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function(){
      var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
     
    $items.removeClass('show'); // remove .show from whichever element currently has it
    $items.eq(itemToShow).addClass('show');    
  };

  // add click events to prev & next buttons 
  $('.next').on('click', function(){
      counter++;
      showCurrent(); 
  });
  $('.prev').on('click', function(){
      counter--;
      showCurrent(); 
  });

})();