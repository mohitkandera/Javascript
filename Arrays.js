// let marks = [23,45,63,56,76]
// console.log(marks [0]) // 23
// console.log(marks [3]) // 56
// console.log(marks [5]) // undefined because this array index only 4
// console.log(typeof marks)

// let heroes = ["iroman", "thor", "antman"]
// console.log(heroes)


// let heroes = ["iroman", "thor", "antman", "BatMan", "Hulk"]
// //         for loop
// for(let i =0; i<heroes.length; i++ ){
//     console.log(heroes[i]);
// }
// // for of 
// for(let element of heroes ){
//     console.log(element)
// }


// let cities = ["delhi", "Pune", "Amritsar", "Ahemdabad", "hyderabad","Gurugram"]
// for (const city of cities) {
//    // console.log(city)
//     console.log(city.toUpperCase())
// }


// let marks = [85, 97, 44 , 37 , 76 , 60]
// let sum = 0;
// for (const val of marks) {
//     sum = sum+val
// }
// let avg = sum/marks.length;

// console.log(`Avg of the marks : ${avg}`)




//  for-of
// let items = [250, 645, 300, 900 , 50]

// let i = 0;
// for(let val of items ){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10
//      items[i] = items[i] - offer
//     console.log(`value after offer = ${items[i]}`);
//    i++;

// }




// //   for
// let items = [250, 645, 300, 900 , 50]

// let i = 0;
// for(let i = 0; i<items.length; i++){
//    let offer = items[i]/10;
//    items[i] -= offer;
// }
// console.log(items)


// push
// let foodItems = ["Potato", "litchi", "apple", "tomato"]
//  foodItems.push("chips", "burger")
//  console.log(foodItems)


// pop = deleted element from end
// let foodItems = ["Potato", "litchi", "apple", "tomato"]
// foodItems.pop()
// console.log(foodItems)



// let foodItems = ["Potato", "litchi", "apple", "tomato"]
//  console.log(foodItems.toString())

// let marvel_heroes = ["thor", "Hulk", "spiderman"]
// let dc_heroes = ["superman" , "batman"]
// let concat = marvel_heroes.concat(dc_heroes)
// console.log(concat)


// let marvel_heroes = ["thor", "Hulk", "spiderman"]
// let dc_heroes = ["superman" , "batman"]
// let indian_heroes = ["shaktiman" , "krish"]
// let concat = marvel_heroes.concat(dc_heroes, indian_heroes)
// console.log(concat)


//  let arr = [1,2,3,4,5,6]

// //  arr.splice(2,0,101) //add element
// //  arr.splice(3, 1)  // delete 4
// arr .splice(3 ,1 ,115)
// console.log(arr)



let companies = ["bloomberg" , "microsoft", "uber", "google", "ibm", "netflix"]
// companies.shift()  // remove from first
// companies.splice(2 ,1 , "Ola")   // replace uber in ola
// companies.push("Amazon")   //add amazon on end
console.log(companies)

