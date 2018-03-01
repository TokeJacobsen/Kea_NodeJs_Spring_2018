$(document).ready(function() {
    $.get( "get-users", function(data) {
        var playerOne = data.players[0];
        var playerTwo = data.players[1];
        $(".player1-name").text(playerOne.nickname);
        $(".player2-name").text(playerTwo.nickname);
      });
});


$("form").submit(function(event) {
    event.preventDefault();
    var playerId = $(".player-selection").val();
    var chosenNickname = $(".chosen-nickname").val();

    var data = {
            "playerId": playerId,
            "choosenNickname": chosenNickname
    };

    $.ajax({
        type: "POST",
        url: "register-user",
        data: data
      }).done(function(response) {
        $(".chosen-nickname").val("");
            var playerOne = response.players[0];
            var playerTwo = response.players[1];
            $(".player1-name").text(playerOne.nickname);
            $(".player2-name").text(playerTwo.nickname);
      });
});


$(document).ready(function() {
    setInterval(function() {
        $.get( "get-results", function(data) {
            
        });
    }, 3000);


});