

//                              get Attribute value of any div

// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let name = div.getAttribute("name")
// console.log(name)

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))


// //                           setAttribute , or change the attribute value
// let para = document.querySelector("p")
// console.log(para)
// console.log(para.setAttribute("class", "newClass"))





//                                  access the style of div
// let div = document.querySelector("div")
// div.style.backgroundColor = "red"
// div.style.backgroundColor="green"
// div.style.fontSize = "30px"
// div.style.textAlign = "center"
// div.style.color = "black"
// div.innerText = "Hlo Div"
// //div.style.visibility = "hidden"




//                  Insert Elements

// let newbtn = document.createElement("button")
// newbtn.innerText = "ClickMe!"


// let div = document.querySelector('div')
// let newbtn = document.createElement("button")
// let btn = newbtn.innerText = "clickMe!"
// div.append(btn) // node.append() = add at the end of node(inside)


// let div = document.querySelector("div")
// let newbtn = document.createElement("button")
// let btn = newbtn.innerText = "CLICKME"
// div.prepend(btn)  // node.prepend = add at the start of node (inside)
//div.before(btn)  // node.prepend = add at the start of node (outside)
//div.after(btn)  // node.prepend = add at the end of node (outside) 

// let p = document.querySelector('p')
// p.after(btn)


//           Create a new heading 

let newHeading = document.createElement("h1")
newHeading.innerText = "I am a new Heading!"
document.querySelector("body").prepend(newHeading)


//    remove para 
let para = document.querySelector("p")
para.remove()