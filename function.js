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
    return x.num = x.num * x.num;
}));

console.log(object);

console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");

//OperationMaker function

function operationFunction(operation){
    if (operation === 'add' || operation === 'subtract' ||
        operation === 'mult' || operation === 'div'){
            return function(a, b){
                if (operation === 'add'){
                    return a + b;
                }
                else if (operation === 'subtract'){
                    return a - b;
                }
                else if (operation === 'mult'){
                    return a * b;
                }
                else if (operation === 'div'){
                    return a / b;
                }
            }
        }
    else{
        return console.log("Please add a valid input: 'add', 'subtract', 'mult', 'div'");
    }
}

var add = operationFunction('add');
var sub = operationFunction('subtract');
var div = operationFunction('div');
var mult = operationFunction('mult');

var added = add(7, 5);
var subed = sub(7, 5);
var dived = div(15, 5);
var multed = mult(3, 5);

console.log(added);
console.log(subed);
console.log(dived);
console.log(multed);