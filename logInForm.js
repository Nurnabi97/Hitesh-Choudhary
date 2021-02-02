//https://www.youtube.com/watch?v=hEX8ohGSOyc&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=15
var getUserInfo = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} this is admin section`;

        case "subAdmin":
            return `${name} this is subAdmin section`;

        case "user":
            return `${name} this is User section`;
    }

}

console.log(getUserInfo("nurnabi", "subAdmin"));
console.log(getUserInfo("aftab", "admin"));




