$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var personInput = $("input#person").val();
    var placeInput = $("input#place").val();
    var thingInput = $("input#thing").val();
    var colorInput = $("input#color").val();

    $(".person").text(personInput);
    $(".place").text(placeInput);
    $(".thing").text(thingInput);
    $(".color").text(colorInput);

    $("#story").show();

    event.preventDefault();

  });
});
