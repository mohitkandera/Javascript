
//                       Asynchronous programming


// console.log("one")
// console.log("two")
// console.log("three")


// 1 method
// function hello(){
//     console.log("hello")
// }
// setTimeout(hello , 2000)  // hello function execute after 2 second

//2 method
// setTimeout(() => {
//     console.log("hello")
// }, 3000) // hello function execute after 3 second



// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("Three")
// }, 2000)
// console.log("four")  // four or five not wait to execute of three
// console.log("five")




//              Callbacks

// function sum(a, b){
//     console.log(a+b);
// }
// function calculator(a , b , sumCallback){
//     sumCallback(a , b);
// }
// calculator(1 ,2 , sum)



// const hello = () => {
//     console.log("hello ")
// }
// setTimeout(hello , 3000)  // hello is a callback



//                           Nesting if-else


// let age = 19;
// if(age>18){
//     if(age>=60){
//         console.log("old")
//     }else{
//         console.log("Middle")
//     }
// }else{
//     console.log("child")
// }






//                                    Nesting for-loop


// for(let i = 0; i<5; i++){
//     let str = "";
//     for (let j=0; j<5; j++){
//         str = str+j;
//     }
//     console.log(i , str)
// }






// function getData(dataId){
//     setTimeout(() => {
//         console.log("data" , dataId);
//     }, 2000)
// }

// // getData(1);
// // getData(2);
// // getData(3);


// // nesting callbacks / callback hell
// getData(1,() => {
//     console.log("getting data 2...........");
//     getData(2, () => {
//         console.log("getting data 3...........");
//         getData(3, () => {
//             console.log("getting data 4...........");
//             getData(4);
//         });
//     });
// });

//                          Promises

// let promise = new Promise((resolve , reject) => {    // resolve , reject is a function
//     console.log("I am a promise");
//     reject("some Error occured")
// })

// function getData(dataId , getNextData){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data ", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 5000)
//     })
// }


// const getPromise = () => {
//    return  new Promise((resolve , reject) => {
//         console.log("I am a promise");
//         // resolve("success")
//         reject("some error")
//     });
// };
// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled")
// });
// promise.catch(() => {
//     console.log("rejected ")
// })






// function asyncFunc1(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success")
//         }, 4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success")
//         }, 4000);
//     });
// }
//                               callback hell
// console.log("fetching data 1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res)
//     console.log("fetching data 2..........");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res)
// })
// })




// function getData(dataId){
//     return new Promise((resolve , reject)=> {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000)
//     })
// }
// //                                            promise chain
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res)
//     })


// async function hello(){
//     console.log("Hello")
// }




function getData(dataId){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data" , dataId);
            resolve("success");
        }, 2000)
    });
}

async function getAllData(){
    console.log("getting data 1.....")
    await getData(1);
    console.log("getting data 2.....")
    await getData(2);
    console.log("getting data 3.....")
    await getData(3);
    console.log("getting data 4.....")
    await getData(4);
   
}

console.log(getAllData())