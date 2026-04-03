const user = {
  firstName: "Test",
  lastName: "Initial",

  get fullname () {
    return this.firstName + this.lastName
  },
  set fullname (value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(user.fullname)
user.fullname="Pavan Anabathula";
console.log(user.fullname);
console.log(user.fullname)

