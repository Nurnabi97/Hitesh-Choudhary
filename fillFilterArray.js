//https://www.youtube.com/watch?v=2k6osJPXsgk&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=22

//fill section.
var testArray = [2, 3, 4, 2, 6, 5, 8, 10];

console.log(testArray.fill("nur", 2, 5));   //fill(value:what you want to replace, start?: number, end?:number)


//filter section.
var myNumber = [12, 23, 32, 45, 48, 78, 75, 67, 87];

var result = myNumber.filter((num) => (num >= 48)); //using aro function.
console.log(result);

//also a callback option in filter()