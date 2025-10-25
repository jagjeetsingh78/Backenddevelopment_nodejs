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


 