/*
 1)for in 
2)for of


*/

// let obj1 = {x:100,y:200 }
// let obj2 = {z:500}

// assign
// keys
// values
// entries

// let mergedObj = Object.entries({},obj1,obj2)
// console.log(mergedObj);



// for in
/*
to get index of elements in an array

*/

// for of loop (or enhanced for loop
/*
to get values of elements in an array
*/


// let employees = ["karan","charan","tharun","sai"];
// for(let v of employees){
//     console.log(v)
// }

// -----------------------------------------------------------------

// Arrow Function

/*
syntax
let functionName = (arg1,arg2,arg3,.....argn)=>{
    // statement body
}

*/

// let emp = function(a,b){
//     // return a * b;          normal function
// }

// let emp = (a,b) => a*b;

// arrow function with arguments
let wishPeople = ()=>console.log("Hello there!!!")
wishPeople();

// arrow function with 1 argument
let wishPeople2 = x =>console.log("Gud afnun")
wishPeople2();

// arrow function with an expression
// ternary operator
// syntax
// condition ? will execute if true: will execute if false

const userAge = 15;
let Welcome = (userAge < 18) ? ()=>console.log("Minor") : ()=>console.log("Major");

  Welcome();      
  
  
//   arrow function with multiple statements 

let difference = (a,b) =>{
    let result = a-b;
    return result;

}

let result = difference(20,10);
console.log(result);














