const user={
    name:"Login",
    comments:"Test"

}

const calculator={
    value:0,
    add(n){
        this.value+=n;
        return this;
    },
    substract(n){
        this.value-=n;
        return this;
    }
}
console.log(calculator.add(10).substract(5));
//{ value: 5, add: [Function: add], substract: [Function: substract] }
