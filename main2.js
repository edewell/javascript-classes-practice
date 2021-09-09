// Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')
let people = []
class Person{
    constructor(name,age,interests){
        this.name = name;
        this.age = age;
        this.interests = interests;
        this.bio = `${this.name.firstname} ${this.name.lastname} is ${this.age} years old. They like ${this.interests} `;
        people.push(this);
    }
    
    // greet(){
    //     console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`);
    // }
};
// Create a class called Student that extends Person and adds the property Cohort to student.
class Student extends Person{
       constructor(name,age,insterests){
           super(name,age,insterests)
       }
      
       
}
// Create a class called Teacher that extends Person and adds the properties subject, and students (students should be an array of Student objects) Create a method called addStudent that takes an instance of Student and adds a student object to the students array.
class Teacher extends Person{
    
        subject;
        student = [];
    
        addStudent = () => {
            student.push(this);
        }
    
    listAllStudents(){
        console.log(this.addStudent);
    }
}
// Create a method called listAllStudents that prints every student name and student cohort associated with a teacher. 

// Create an instance of the Teacher class called teacher1 with an empty student array. Create another instance of this class called teacher2 with an empty student array. Add two students to teacher1 using the class method. Add two students to teacher2 using the class method. List all students associated with teacher1 using the class method. List all studnets associated with teacher2 using the class method.
function main(){
    let newStudent = new Student({firstname:'Eddie', lastname:'Ewell'}, 22,'Basketball');
   

   let teacher1 = new Teacher({firstname:'Rebecca', lastname:'Smith'}, '32','teaching');
   teacher1.subject = 'CSS';
    teacher1.listAllStudents();
    

   let teacher2 = new Teacher({firstname:'Greg', lastname:'Lewis'}, '44','coaching sports');
   teacher2.subject = 'JS';
   teacher2.listAllStudents();

   console.log(teacher1);
   console.log(teacher2);
   console.log(newStudent);

}

main();