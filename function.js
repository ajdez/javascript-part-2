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

console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");




//Longest name looking in objects

var namesEmails = [
    {
        name: "Anthony",
        email: "anthony@gmail.com"
    },
    {
        name: "Nathan",
        email: "nathan@gmail.com"
    },
    {
        name: "Johny",
        email: "johny@gmail.com"
    }
];


console.log(namesEmails.sort(function(a,b){
    return b.name.length - a.name.length;
}));


console.log(namesEmails.sort(function(a,b){
    return a.email > b.email;
}));


console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");


//Function that uses MAP !!!

function mapFunc(a){
    return Math.sqrt(a);
}

console.log(mapFunc(4));

var array = [4, 9, 16];

console.log(array.map(Math.sqrt));

console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");

//Function square 

function square (obj){
    var num;
    return num = obj.num * obj.num;
}

var object = [
    {
        name: "John",
        email: "john@gmail.com",
        num: 24},
    {
        name: "Benji",
        email: "benji@gmail.com",
        num: 4}
    ];
    

console.log(object.map(function(x){
    return x.num * x.num;
}));