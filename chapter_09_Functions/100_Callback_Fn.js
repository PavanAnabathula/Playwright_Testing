//callback function
//callback is an function passed as an argument to another function ,to be called later

function runTest(testname,callback){
    let result="pass";
    //100 lines
    callback(testname,result)
}

function onComplete(name,result){
    console.log(`Run test ${name} with the result as ${result}`);
}

runTest("CallBack",onComplete);