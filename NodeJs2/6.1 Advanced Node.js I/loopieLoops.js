
exports.giveMeTheIndexOf = function(myList, predicate) {
    let listIndex = -1;
    // with function callback!
    myList.forEach(function(item, index) {
        if (item === predicate) {
            listIndex = index;
        }
    });
    return listIndex;
};


// with arrow function!
// myList.forEach((item, index) => {
// });

exports.giveMeTheIndexOfVersionTwo = function(myList, predicate) {
    return myList.findIndex(item => item === predicate); // works for objects too
    // return myList.indexOf(predicate); // only works if the list is strings or numbers etc.
}
