let status1 = 0;
switch (status1) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

// Output: "0 matched" (0 === 0, NOT 0 === false)