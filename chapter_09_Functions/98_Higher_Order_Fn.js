/* Higher-Order Functions
A function that takes a function as argument or returns a function.*/

function runWithLogging(testfn,testName){
    console.log(`Starting ${testName}`);
    let result=testfn();
    console.log(`Finished : ${testName} -> ${result}`)
    return result;
}

function loginTest(){
    return "Pass";
}

function LoginTestFailed(){
    return "Fail";
}

runWithLogging(loginTest,"Login Test");
runWithLogging(LoginTestFailed,"Dashboard Failed Test");