;(function(){

  "use strict";

  $(document).on("click", ".js-nico3", function(event){

    var $self = $(this);
    var $container = $self.closest(".js-greetings");
    $container.find(".col-sm-4").fadeOut(function(){
      $self.removeClass("col-sm-4").addClass("col-sm-12 text-center").fadeIn();
    });

  })


})();