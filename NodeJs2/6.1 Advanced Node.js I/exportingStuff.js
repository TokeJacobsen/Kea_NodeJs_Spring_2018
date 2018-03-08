const NAME = "Anders Latif";

exports.someString = "here is some string";

//giveMeMyName();

function giveMeMyName() {
    console.log(NAME);
}

exports.giveMeMyName = giveMeMyName;

exports.giveMeAName = function(paramName) {
    return paramName;
};