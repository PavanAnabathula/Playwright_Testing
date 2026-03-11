let arr=[1,2,3,4];
console.log(arr);

// Add to End 
arr.push(5)
console.log(arr);

//Remove from End
arr.pop(5)
console.log(arr);

arr.push(5,6);
console.log(arr);

//Add to Beginning
arr.unshift(0);[ 0, 1, 2, 3, 4, 5, 6 ]
console.log(arr);

//Remove from Beginning
arr.shift();
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

/*splicesplice(start: number, deleteCount?: number to add): number[]
Removes elements from an array and, if necessary, 
inserts new elements in their place, returning the deleted elements.*/
arr.splice(2,1);//Remove 1 item at index 2
console.log(arr);//[ 1, 2, 4, 5, 6 ]

arr.splice(1,2,10,20)//Remove 2 item at index 1 and add 10,20
console.log(arr);//[ 1, 10, 20, 5, 6 ]



