// Task-1:

let number = prompt("Enter Your number:");
let check = ["Even","Odd"];
console.log(check[number % 2]);

//Task-2:
let age  = 22;
console.log(age >=18 ? "Eligible" : "Not Eligible");

//Task-3

let salary = 12300;
let AnualSalary = 12300 * 12;
let Bonous = AnualSalary * 20/100;
total = AnualSalary + Bonous;

console.log(total);

//Task-4

let color = prompt("Enter Your Color:");
if(color.toLowerCase() == "red"){
    console.log('Stop');
}else if(color.toLowerCase() == "green"){
    console.log('Go');
}else{
    console.log("Given Differnt Color");
}
