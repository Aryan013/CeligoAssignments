

//Method 1
const Person = new Object();
Person.firstName="Aryan";
Person.lastName="Wadagbalkar";
Person.age=21;
console.log(Person);

//Method 2
const person = {
  firstName : "Aryan",
  lastName : "Wadagbalkar",
  age : 21
};

console.log(person);

//Method 3 Using Constructor
function Person1(firstName,lastName,age)
{
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
}
const person1=new Person1("Aryan","Wadagbalkar",21);
console.log(person1);

