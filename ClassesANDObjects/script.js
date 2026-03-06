







// const student = {
//     fullName : "Mohit Kumar",
//     marks : 78.4,
//     printMarks: function(){
//         console.log("marks =" ,this.marks)  // student marks
//     } 
// }
// console.log(student)






// const employee = {
//     calctax1(){
//         console.log("tax rate is 10 %");
//     },
//     calctax2: function() {
//         console.log("tax is 30%")
//     }
// };





// const employee = {
//      calcTax(){
//          console.log("tax rate is 10 %");
//     },
// };

// const karanArjun1 = {
//     salary: 50000,
// };
// const karanArjun2 = {
//     salary: 80000,
// };
// const karanArjun3 = {
//     salary: 60000,
// };
// const karanArjun4 = {
//     salary: 90000,
// };
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


// const employee ={
//     calcTax(){
//         console.log("tax rate is 30%")
//     },
// } ;
// const karanArjun = {
//     salary : 50000,
//     calcTax(){
//         console.log("tax rate is 20%")
//     },
// };

//  karanArjun.__proto__ = employee
// // console.log(karanArjun.calcTax())



//                          Classes in JS


// class ToyotaCar {
//     constructor(brand , mileage , color){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//         this.color = color;
//     }

//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     // setbrand(brand){
//     //     this.brandName = brand;    // this.brand = object property
//     // }
// }
// let fortuner = new ToyotaCar("fortuner" , "","white"); // constructor invoked
// console.log(fortuner)
// // fortuner.setbrand("Bhokal")
// let lexus = new ToyotaCar("lexus" , 12 ,"red" ); 
// console.log(lexus)
// // lexus.setbrand("Mercedes ")
//  // The property of ToyotaCar are store in lexus


class Car{
    constructor(brand , mileage , color){
        this.brand = brand;
        this.mileage = mileage;
        this.color = color;
    }
    details(){
        return `Brand of car is ${brand} mileage is ${mileage} and color is ${color}`
    }
}
 const myCar1 = new Car("Fortuner", 15, "White");
 const myCar2 = new Car("Scorpio", 18, "Black");
 const myCar3 = new Car("LordAlto", 30, "Gray");


 console.log(myCar1)
 console.log(myCar2)
 console.log(myCar3)


//                  Inheritance in JS


// class parent {
//     hello(){
//         console.log("hello")
//     }
// }
// class child extends parent{}

// let obj = new child();  //  obj.hello = hello










// class Person{
//     constructor(species){
//         this.species = "homo sapiens"
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Enginner extends Person {  //inherit properties from preson
   
//     proffesion (){
//         console.log("solve problem , build something")
//     }
// }
// class Doctor extends Enginner {  // inherit propertie from enginerr and enginner have person properties
//     work(){
//         console.log("DO Nothing")
//     }
// }
// // let mohit = new Enginner(); 
// let mohit = new Doctor("Software Engineer");
// console.log(mohit)




//        error hnadling  


// let a= 5;
// let b = 10;
// console.log("a = " , a)
// console.log("a + b ", a+b)
// console.log("a + b ", a+b)
// console.log("a + b ", a+b)
// try{
//     console.log("a + b ", a+c)  // error
// }catch(err){ // errow is error obj
//     console.log(err)
// }

// console.log("a + b ", a+b)
// console.log("a + b ", a+b)
// console.log("a + b ", a+b)
// console.log("a + b ", a+b)



