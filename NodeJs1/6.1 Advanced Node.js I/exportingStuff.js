const NAME = "anders latif";

//giveMeTheName();

function giveMeTheName() {
    console.log(NAME);
}

exports.giveMeTheName = giveMeTheName;

exports.giveMeMyName = function(paramName) {
    return paramName;
}