// //traditonal Approach

// function add(x , y){
//     return x + y;
// }

// console.log(add(5,5));

//Arrow function

// const add =(x, y) => x+y;
// console.log(add(5,3));

// function myFunction(){
//     console.log("welcome to apna college")
//     console.log("we are learning js")
// }
// myFunction()



// function myfunction(msg){
//     console.log(msg)
// }
// myfunction("i love js")


// function sum(x ,y){
//     console.log(x + y)
// }
// sum(12,12)



//           Arrow function

// const myFunction = ()=> {
//     console.log("welcome to apna college")
//     console.log("we are learning js")
// }
// myFunction()

// const sum = (x, y)=> {
//     console.log(x+y)
// }
// sum(5 ,10)

// function multiply(x , y){
//     return x*y
// }
// console.log(multiply(5,5))

// const arrowmul = (a , b)=>{
//     console.log(a*b)
// }
// arrowmul(10, 10)

// function countVowels(str){
//     let count = 0;
//     const vowels = 'aeiou';
//     for(let char of vowels){
        
//     }
// }



// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//         }
       
//     }
//       console.log(count);
// }
// console.log(countVowels("aeioouxyz"))   //          6



// //  with arrow function
// const countVowelsArrow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if('aeiou'.includes(char)){
//             count++;
//         }
//     }
//     console.log(count);
// }
// console.log(countVowelsArrow("apnaCollegeoo"))  //          6       





// let arr = [1,2,3,4,5];

// arr.forEach(function (val){
//     console.log(val);
// })


// let arr = [1,2,3,4,5,6];
// arr.forEach((val) => {
//     console.log(val);
// })


// let city = ["delhi" , "mumbai" , "banglore", "chennai"];
// city.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// })

// let nums = [1,23,45,678];

// nums.map((val) => {  // .map is used to find all the element of arr  /  return new arr  
//     console.log(val)
// })

// nums.forEach((nums) => {
//     console.log(nums* nums)
// })


// let num = [1,2,3,4,5,6,7,8,9];

// let evenarr = num.filter((val) => {
//   return val%2 === 0;
// })
// console.log(evenarr)


// //   sum of all arr element using reduce
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((accumulator , currentvalue) => {
//     return accumulator + currentvalue;
// })
// console.log(sum)      //  15



// //  find biggest number in arr using reduce
// let arr = [34,65,33,56];

// let biggest = arr.reduce((max , currVal) => {
//     return max > currVal ? max : currVal;
// })
// console.log(biggest)


