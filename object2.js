//https://www.youtube.com/watch?v=gqBaQHXHwm0&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=25

var user = {
    firstName: "NUR",
    lastName: "NABI",
    age: 28,
    courseList: [],

    buyCourse: function(courseName){
        this.courseList.push(courseName)    //this keyword mean inside user object.
    },

    getCourseCount: function(){
        return `${this.firstName} enroll the total ${this.courseList.length} courses`;
    },
};
console.log(user.getCourseCount());
user.buyCourse("react.js");
user.buyCourse("angular");
console.log(user.getCourseCount());