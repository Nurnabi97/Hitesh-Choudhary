//https://www.youtube.com/watch?v=brtUfHte9uc&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=52

//spread operator.
function sumTwo(a, b){
    return a + b;
}

const myObj = [4,5];
 console.log(sumTwo(...myObj)); //result = 9


 //rest operator.
function sumAny(a, b, ...args){ //1st two variable for multiply. 2nd for sum.
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg         //this can also right sum += arg.
    }
    return[sum, multi];
}

console.log(sumAny(5, 3, 4, 5)); //result = [ 9, 15 ]