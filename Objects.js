const Student =  {
    name : "Mohit kandera",
    age : 22,
    college : "hrit",
    hobbies: ["coding", "reading", "gaming", "cricket"],
    greet: function(){
        console.log("Hello my name is " + this.name)
    }


}
console.log(Student.name);
console.log(Student.hobbies[3]);
Student.greet();