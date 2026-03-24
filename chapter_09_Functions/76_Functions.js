//without functions -Repeated Logic

let score1=85;

let result1=score1>=70?"pass":"fail";

console.log(result1);

let score2=45;

let result2=score2>=70?"pass":"fail";

console.log(result2);

let score3=59;

let result3=score3>=70?"pass":"fail";

console.log(result3);

//With Function

function getResult(score){
    return score>=70?"pass":"fail";
}

console.log(getResult("30"));
console.log(getResult("89"));



