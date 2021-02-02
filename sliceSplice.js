//https://www.youtube.com/watch?v=t1qDSAUclzI&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=23

//slice method can slice value like your birthday cake.
var userName = ["Tom", "Tin", "Rim", "Nur", "Lol"];

console.log(userName.slice(1, 3)); //start: number, end: number. 
                                    // only one number can slice form start.



//splice can slice and replace with value one or more you want.
var users = ["Tom", "Tin", "Rim", "Nur", "Lol"];

users.splice(1, 3, "HI", "BYE"); //start: number, Delete count?: number, add string[];
console.log(users); 

// var result = users.splice(1, 3, "HI", "BYE"); 
// console.log(result);  //it's not working with variable.