// Js Part 2 (day two)

//Array.prototype.sort method. 

function prototypeSort(strOne, strTwo, strThree){
    var array = [strOne, strTwo, strThree];
    array.sort(function(a, b){
        return b.length - a.length;
    });
    return array[0];
}

console.log(prototypeSort("Anthony", "Hello", "Hellomama", "arr"));

var arrayOne = ["John", "Ben", "Allen"];
var arrayTwo = ["cats", "dog", "belly"];

console.log(arrayOne.sort(function(a, b){ return b.length - a.length}));
console.log(arrayTwo.sort(function(a, b){ return b.length - a.length}));
