$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var personInput = $("input#person").val().toUpperCase();
    var placeInput = $("input#place").val().toUpperCase();
    var thingInput = $("input#thing").val().toUpperCase();
    var colorInput = $("input#color").val().toUpperCase();


    $(".person").text(personInput);
    $(".place").text(placeInput);
    $(".thing").text(thingInput);
    $(".color").text(colorInput);


    $("#story").fadeIn(500);


    event.preventDefault();

  });
});
