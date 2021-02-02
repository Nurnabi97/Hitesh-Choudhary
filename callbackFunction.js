//https://www.youtube.com/watch?v=Tny4_-QjNHg&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=21

//method-1
function isEven(element){
    if(element%2 == 0){
        return "this element is even";
    }else{
        return "this element is Odd"
    }
}
var result = isEven(3);
console.log(result);



//we can modify the method-1 by method-2 
var isEven = (element) => {
    return element % 2 === 0; // if we remove return it's show undefine.
};
// console.log(isEven(2)); // we can use it also but callback can pass group of array.

//call backFunction
var result = [2, 3, 6, 8].every(isEven); //this is callback function. every check the all
console.log(result);                    //  parameter one by one by the isEven function


//this is method-3 very simple 
var result = [2, 4, 4, 6, 8].every((e) => (e % 2 === 0));  //ero function callback
console.log(result);

//shot function (=>) method no need to return it.

