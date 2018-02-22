$(document).ready(function() {
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
            console.log(response);
        });
          

    });
});