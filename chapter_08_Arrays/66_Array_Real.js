let browsers=["chrome","edge","safari","opera","firefox"];
console.log(browsers.length);//5
console.log(browsers);//[ 'chrome', 'edge', 'safari', 'opera', 'firefox' ]

browsers.pop();
console.log(browsers);//[ 'chrome', 'edge', 'safari', 'opera' ]

console.log("----------Space--------------------");

let removed=browsers.shift();
console.log(browsers);//[ 'edge', 'safari', 'opera' ];
console.log(removed);//chrome

console.log("----------Space--------------------");


for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
    if (browsers[i] === "opera") {
        console.log("opera is removed from the selenium!");
    }
}