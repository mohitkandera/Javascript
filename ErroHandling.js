// try block contain the code  that might throw an error
try{
    const result = someUndefinedVariable + 10;
    console.log("result : " + result);
}catch(error){
    console.log("An error occurred : " + error.message);
}
// output : an error occured : someUndefinedVaribale is not defined


