// function fullName() {
//   console.log(this.firstName + " " + this.lastName);
// }
// const obj = {
//   firstName: "abc",
//   lastName: "kcc",
// };
// Function.prototype.myCall = function(obj,...arg){
//   obj.func = this;
//   const output = obj.func(...arg);
//   delete obj.func;
//   return output;
// };
// fullName.myCall(obj)

// function fullName(args) {
//     console.log(this.firstName + " " + this.lastName+" "+args);
//   }
//   const obj = {
//     firstName: "abc",
//     lastName: "kcc",
//   };
//   Function.prototype.myApply = function(obj,arg){
//     obj.func = this;
//     const output = obj.func(arg);
//     delete obj.func;
//     return output;
//   };
//   fullName.myApply(obj,["a","a","a","a"])

// function fullName(args) {
//     console.log(`${this.firstName} ${this.lastName} ${args}`);
// }
// const obj = {
//   firstName: "abc",
//   lastName: "kcc",
// };

// Function.prototype.myBind = function (obj, ...arg) {
//   let fun = this;
//   return function () {
// fun.call(obj,...arg);
//   };
// };

// const a = fullName.myBind(obj, "a", "b");
// console.log(a());
