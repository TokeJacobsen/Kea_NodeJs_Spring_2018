// $("form").submit(function(event) {
//     event.preventDefault();
//     console.log("form submitted");
// });

$(".form-button").click(function(event) {
    event.preventDefault();
    var playerId = $(".player-selection").val();
    var chosenNickname = $(".chosen-nickname").val();

    var data = {
            "playerId": playerId,
            "choosenNickname": chosenNickname
    }

    $.ajax({
        type: "POST",
        url: "register-user",
        data: data
      }).done(function(response) {
          console.log(response);
      });
});

$(document).ready(function() {
    setInterval(function() {
        $.get( "get-results", function(data) {
            
        });
    }, 3000);


});