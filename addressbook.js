//Addresss Book file

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = [];

}
Person.prototype.addEmail = function(address, type){
    this.email.push(new Email(address, type))
};

function Email(address, type){
    this.address = address;
    this.type = type || "other";
}

var personOne = new Person("john", "smith");
console.log(personOne);

personOne.addEmail("john@gmail.com", "work");
personOne.addEmail("johnHome@gmail.com", "home");

console.log(personOne);
