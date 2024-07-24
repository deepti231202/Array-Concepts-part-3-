

//=================================================================================

//                       24/07/2024

// 9) Array spreading

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let join = [...num1,...num2];
// document.write(join);

//======================================================================================

//29) Removing array items by index

// let remove=2;
// let num=[0,2,4,6,8];
// num.splice(remove,1);
// console.log(num);

//========================================================================

// 32) Finding the longest string in an array

// function longword(str){ 
//     str = str.split(" ") 
//     return str.sort((x, y) => y.length - x.length)[0];
// } 
// document.write("Longest word :",longword("Good evening everybody!"))

//=====================================================================================

// 30) Inserting items

// function insertElement() {
//   let num = [1, 2, 3, 4, 5];
//   let index = 3;
//   let element = 23;
// num.splice(index, 0, element);
//   console.log(num);
// }
// insertElement()

//=====================================================================================

//  8) Array destructing

let a, b, rest;
[a, b] = [50, 20];

console.log(a);

//==============================================================================================
