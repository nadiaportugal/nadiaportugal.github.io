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

  })


})();