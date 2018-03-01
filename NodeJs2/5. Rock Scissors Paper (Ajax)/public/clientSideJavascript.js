$(document).ready(function() {

    $.get( "get-users", function( data ) {
        console.log( "Data Loaded: " + data );
        // 3 todo take the data and update the player elements
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
            console.log(response);
        });
          

    });
});