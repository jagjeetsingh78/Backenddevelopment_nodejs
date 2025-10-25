// alert("jashan backend series is started now ");->  ALERT IS MAJORILY THE FRONTEND THINGS NOT BACKEND 

var arr =[1,2,3,4,5, "jashan"];

arr.forEach(function(element){
    console.log("The element is " + element);
});
  

// for making the map function of the thigns in the arrays and all thigns 
 arr_2 = arr.map(function(element){
     return element + 12;
 });

 console.log("The new array with added 12 is " + arr_2);



 // this will give the first output realted to it like the here if the 1 then next greater is like 2
// it will give just 2 not another things and all

var jash= arr.find(function(element){
    if(element>1) return true ;
    return false;


 });
 console.log(jash);
// the next function is to be the function of the index of the thing like in the arrays and all 
// like the 
var simu = arr.indexOf(459);
console.log(simu);
// it wil be the return -1 if the things like the negtive and the all like we are having the 
// the issues like 3940 is not in the arrays and all 


// objects in the arrays are like the things are the  in the json 
const user ={

    name: "jashan",
    age :"14",  
    address: "guru nanak dev university"
};
console.log(user.name);
console.log(user.age)
console.log(user.address)
console.log(user['name'])
console.log(user['age'])
console.log(user['address'])

// these both are the above methods for the acessing the fucntions and the thigns 
// these are the all things  


// we can have the fucntions arrays for the length but for the functions having the length 
// and the  all the things 
  
console.log(arr.length)
// simlairly we can also have the length for the function like the fucntions have the length and the 
// that is the basically the parameters 


// ...existing code...
function functionbyjashan(a, b, d) {
    console.log('jashan');
}

console.log('the value of the function parameters are to be the ');
console.log(functionbyjashan.length);
function functionbyjashan(a, b, d,f) {
    console.log('jashan');
}
console.log('the value of the function parameters are to be the second ');
console.log(functionbyjashan.length);


// the java Script also doesnot support the method overlaoding like things supported in the 
// Java or c++ all things and the all 

// function greet() {
//   console.log("Hello!");
// }

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet(); // ❌ Error: name is undefined → prints "Hello, undefined!"

//await function called by the things and all the async await is the asynchornous programing 
// and all thigns here making the things and the  we can have the things the make the all the 


// synchronous is like one by one side steps and all things here and the like one by one 
// first thing will be executed then first then second and the 
// then the we are having two thigns in the javascipt first thing is like the 
// the main stack and the side stack and the main stack first all thigns and the 
// side stack is all the by step by step thigns to executions for needed 
