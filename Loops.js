

// for ( let i = 0; i<5; i++){
//     console.log("apna College")
// }
// console.log("loop has ended")



// let sum = 0;
// for (let i = 0; i<=4; i++){
//    sum =  sum + i;
// }
// console.log("The sum is : " + sum);


// let sum = 0;
// let n = 5;
// for (let i = 0; i<=n; i++){
//    sum =  sum + i;
// }
// console.log("The sum is : " + sum);



// //print 1 to 5
// for (let i = 0; i<=5; i++){  // in case of var outer i is printed as 6
//     console.log("i  = " , i);
// }
// console.log(i)


// WHILE LOOP 

// let i = 1;
// while(i<=10){
//     console.log("i = ", i);
//     i++;
// }



// do While loop
// let i = 0;
// do{
//     console.log("apna college");
//     i++;
// }while(i<=10);


// let i = 1;
// do{
//     console.log("i = ", i);
//     i++;
// }while(i<=7);


//for-of loop

// let arr = [1,2,3,4,5,6];
// for(let num in arr){
//     console.log(num);
// }

// let string = ["mohit", "ankit", "ankur", "sanjay"];
// for(let name of string){
//     console.log(name);
// }

// let str = "apnaCollege";
// for(let char of str){
//     console.log(char);
// }



//    for-in  loop

// let student = {
//     name : "mohit",
//     age : 21,
//     college : "apna college",
//     cgpa : 9.1
// }
// for(let key in student){
//     console.log("key is :", key , ",", "and values is : ", student[key]);
// }



// print odd number from 1 to 100
// for(let i =0; i<=100; i++){
//     if(i%2 !=0){
//     console.log("odd is  = ", i);
//     }
   
// }

//print even number from 1 to 100

// for(let i =0; i<=100; i++){
//     if(i%2===0){
//     console.log("even is  = ", i);
//     }
   
// }




let gameNo = 25;
let usernum = prompt("Guess the game number : ");
while(usernum != gameNo){
  userNo = prompt("you enterd the wrong number , Guess again :")
}

console.log("you entered the right number");