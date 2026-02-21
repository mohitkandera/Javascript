// Global scope = accessible anywhere
let globalVariable = "global";

greet();
function greet(){
    //function scope - accessible inside this function 
    let functionVariable = "function scope variable";

    if(true){
        // Block scope - accessible only inside this block
        let blockVariable = "block";
        console.log(blockVariable); // output : block
        console.log(functionVariable); // output : function scope variable
        console.log(globalVariable); // output : global
    }
    console.log(globalVariable); // output : global
}
console.log(gllobalVariable); // output : global