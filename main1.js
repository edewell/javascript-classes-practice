// Define a class called Pet with three properties, type, breed and age. Create a method called formatProperties that prints all object properties using string templating. Create a method called changeAge that takes a number and updates the age property of an object. Create a method called dogYears that checks if the pet type of the object is dog, if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!". Create an instance of the Pet Class called pet1. Print all property values of the object using the class method. Create another instance of the Pet Class with diffrent property values called pet2. Print all property values of the object using the class method. Change the age grade of pet1. Print the age of pet1 in dog years using the class method. Print the age of pet2 in dog years using the class method

class Pet{
    constructor(type,breed,age){
        this.type = type;
        this.breed = breed;
        this.age = age; 
    }

    // TODO: method 
    formatProperties(){
        console.log(`${this.type} ${this.breed} ${this.age}`);
    }
    // TODO: add method for changing age
    changeAge(){
        this.age = age;
    }
    // TODO: add method for dog years
    dogYears(){
        if (this.age = 7);
        return this.age;
    }
}

function main(){
    // TODO: create 2 instnces
let pet1 = new Pet('dog', 'pitbull', 2);
let pet2 = new Pet('cat', 'persian', 3);
    // TODO: print out the properties
    pet1.formatProperties();
    pet2.formatProperties();
    pet1.dogYears();
   
    console.log(pet1);
    console.log(pet2);
}

main();