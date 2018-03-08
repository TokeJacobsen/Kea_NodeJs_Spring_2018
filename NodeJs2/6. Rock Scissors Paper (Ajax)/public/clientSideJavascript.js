$(document).ready(function() {
    var playerId = "0";

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
        var playerIdDropdown = $(".player-selection").val();
        var chosenNickname = $(".chosen-nickname").val();

        var data = {
            "playerId": playerIdDropdown,
            "chosenNickname": chosenNickname
        };

        $.ajax({
            type: "POST",
            url: "register-user",
            data: data,
        }).done(function(response) {
            playerId = playerIdDropdown;
            var players = response.players;
            var playerOne = players[0];
            var playerTwo = players[1];
            $(".playerOne-name").text(playerOne.nickname);
            $(".playerTwo-name").text(playerTwo.nickname);
            $(".chosen-nickname").val("");
        });
    });

    $(".icon-div").click(function(event) {
        event.preventDefault();

        var clickedIconName = $(this).attr("id");
        console.log(clickedIconName);

        // ex. url /choose/rock?playerId=1
        var url = "";
        
    });
    
    setInterval(function() {
        
        $.get("get-results", function(response) {
            console.log(response);
            if (response.winner !== "not yet") {

                if (response.winner === 0) {
                    $("body").css("background-color", "blue");
                }

                if (response.winner === 1 && playerId === "1") {
                    $("body").css("background-color", "green");
                } else if(response.winner === 1 && playerId === "2") {
                    $("body").css("background-color", "red");
                }

                if (response.winner === 2 && playerId === "2") {
                    $("body").css("background-color", "green");
                } else if(response.winner === 2 && playerId === "1") {
                    $("body").css("background-color", "red");
                }
            }
        });


    }, 3000);


});