// alert("jashan backend series is started now ");->  ALERT IS MAJORILY THE FRONTEND THINGS NOT BACKEND 

var arr =[1,2,3,4,5, "jashan"];

arr.forEach(function(element){
    console.log("The element is " + element);
});
  
 arr_2 = arr.map(function(element){
     return element + 12;
 });

 console.log("The new array with added 12 is " + arr_2);