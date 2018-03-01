$(document).ready(function() {

    $.get("get-users", function(response) {
        var players = response.players;
        var playerOne = players[0];
        var playerTwo = players[1];
        $(".playerOne-name").text(playerOne.nickname);
        $(".playerTwo-name").text(playerTwo.nickname);
        $(".chosen-nickname").val("");
    });



    $("form").submit(function(event) {
        event.preventDefault();
        var playerId = $(".player-selection").val();
        var chosenNickname = $(".chosen-nickname").val();

        var data = {
            "playerId": playerId,
            "chosenNickname": chosenNickname
        };

        $.ajax({
            type: "POST",
            url: "register-user",
            data: data,
        }).done(function(response) {
            var players = response.players;
            var playerOne = players[0];
            var playerTwo = players[1];
            $(".playerOne-name").text(playerOne.nickname);
            $(".playerTwo-name").text(playerTwo.nickname);
            $(".chosen-nickname").val("");
        });
    });

    

});