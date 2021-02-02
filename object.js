//https://www.youtube.com/watch?v=HPddGlSIV3M&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=24

var user = {
    firstName: "NUR",
    lastName: "NABI",
    age: 28,
    facebook: true,
    girlFriend: false, 
};
//you can access in object two way or maybe more.
console.log(user);
console.table(user);

//you can read value by calling property name.
console.log(user.firstName);
console.log(user.girlFriend);

//you can replace property value.
user.girlFriend = true; //more way have to replace but it's easy.
user.age = 29;
console.table(user);