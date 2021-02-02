// //https://www.youtube.com/watch?v=26QWcjTdJGM&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=26
// //You need comment out the program when you run a specific program.

const division = ["RAJSHAHI", "RONGPUR", 1971, "KHULNA", 1992, "CHATTAGANG", "BORISHAL"];


// //common use of for loop
// for (let i = 0; i < division.length; i++) {

//     // console.log(i);  //try to run it to known the number of the element inside array.
//     console.log(division[i]);   //result is all arr
// };


// //for loop in advance level

// //slot the value using typeof and continue keyword. it's not required to return because of {} missing.
// for (let i = 0; i < division.length; i++) {

//     if(typeof division[i] !== "string") continue;   //is string?: false. continue with true value.
//     console.log(division[i]);
// };


// // slot number value in array.
// for (let i = 0; i < division.length; i++) {

//     if(typeof division[i] === "string") continue;   //is string?: false. give the false value.
//     console.log(division[i]);
// };


//stop the loop when get number or string as per condition.
for (let i = 0; i < division.length; i++) {

    if(typeof division[i] !== "string") break;   //is string?:false. ok break.
    console.log(division[i]);
};
