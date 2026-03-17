
let retry=0
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;


} while (retry < 3);


// while will not  execute atleast one iteration if condition fails
let a = 10;
while (a <10) {
    console.log(a);
    a++;
}


//Do while will execute atleast one iteration if condition fails also

do {
    console.log(a);
    a++;
} while (a < 10)