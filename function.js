// Js Part 2 (day two)

//Array.prototype.sort method. 

function prototypeSort(strOne, strTwo, strThree){
    var array = [strOne, strTwo, strThree];
    return array.sort(function(a, b){
        return a.length - b.length;
    });
}

console.log(prototypeSort("Anthony", "Hello", "Hellomama"));

