
var fruits = ["apples", "pears", "cherries", "bananas"];

exports.giveIndexBasedOnPredicate = function(myList, predicate) {
    let foundIndex = -1;
    myList.forEach((item, index) => {
        if (item === predicate) {
            foundIndex = index;
        }
    });
    return foundIndex;
}

// uses a function callback
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// arrow function!
fruits.forEach((fruit) => {
    console.log(fruit);
});
