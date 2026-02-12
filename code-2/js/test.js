// var x = window.prompt("Enter Number:-");
// console.log(Number(x));
// console.log(50);

// Comparison Operators :
// • == Equal .
// • != Not Equal .
// • === Identical .
// • > Larger Than
// • >= Larger Than Or Equal .
// • < Smaller Than .
// • <= Smaller Than Or Equal .

// console.log(5 >= 5);

// if(condition){
//     //statement
// }

// var x = 8;
// if(x == 5){
//     console.log("yes");
// }else{
//     console.log("No");
// }

// var x = 20;
// if(x == 5){
//     console.log("x IS equal 5");
// }else if (x > 20){
//     console.log("x IS greater than 20");
// }else{
//     console.log("x is not equal 5 or greater than 20");
// }

// if(true){
//     if(x == 20){
//         console.log("Yes");
//     }
// }

// switch("A"){
//     case "A":
//         console.log("Excellent");
//         break;
//      case "B":
//         console.log("Very Good");
//         break;
//      case "C":
//         console.log("Good");
//         break;
//      case "D":
//         console.log("Accept");
//         break;
//      case "F":
//         console.log("fail");
//         break;
//     default:
//         console.log("Enter Valid data");
// }
// index
//       0123456789
//               987654321
// var x = "Ali Mohamed Ahmed";

// console.log(x.slice());
// console.log(x.slice(2));
// console.log(x.slice(2,5));
// console.log(x.slice(-4));
// console.log(x.slice(-9,-2));
// console.log(x.slice(2,-2));
// console.log(x.slice(-2,-9));
// console.log(x);

// console.log(x.lastIndexOf("A"));
// console.log(x.lastIndexOf("Ali"));
// console.log(x.lastIndexOf("A",5));
// console.log(x.lastIndexOf("a",3));
// console.log(x.lastIndexOf("M",0));

// console.log(x.indexOf("A",-8));
// console.log(x.at(-5));

// console.log(x.length);
// console.log(x[5]);
// console.log(x[4]);
// console.log(x.charAt(13));
// console.log(x.at(5));

// console.log(x.indexOf("M"));
// console.log(x.indexOf("A"));
// console.log(x.indexOf("A",2));
// console.log(x.indexOf("A",2));
// console.log(x.indexOf("Ahmed"));
// console.log(x.indexOf("oh"));
// console.log(x.indexOf("p"));

// if(true){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// x = 2
// x == 5 ? console.log("Yes") : console.log("no")

// nullish operator ?? \ || operator

// console.log(0 ?? "Yes");
// console.log(0 || "Yes");

// console.log("" ?? "Yes");
// console.log("" || "Yes");

// console.log(null ?? "Yes");
// console.log(null || "Yes");

// console.log(undefined ?? "Yes");
// console.log(undefined || "Yes");

// console.log(20 ?? "Yes");
// console.log(20 || "Yes");

var arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// console.log(arr[1]);

// for(var i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }

var i = 0;
// while(i < arr.length){
//      console.log(arr[i]);
//      i++;
// }

// var i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);
