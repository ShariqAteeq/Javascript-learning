//object vs primitives

//primitives are integer float boolean

var a = 10;
var b = a;
//mutate value of a
a=12;
console.log("a is :"+a+" B is "+b);

var obj1 = {
    name:"Shariq",
    age:20,
    city:"Karachi"
};
//here we didnt copy the object 1 we just create new reference of obj1 that point to obj 2
var obj2 =obj1;
obj1.age = 12;
console.log("Obj1 Age is : "+obj1.age+" Obj2 Age is : "+obj2.age);

//mutate value using function
//we dont pass the object in function we just pass the reference of object
function change(a,b){
    a=22;
    b.city="Lahore";
}
change(a,obj1);
//city will mutate to lahore & age will mutate to from 22 to 12
console.log(a,obj1.city);

//passing function as an argument
//call back function

var years = [2000,1999,1978,2002,2005];

function arrayCal(arr,fn){
        var arrRes = [];
        for (var i =0 ; i < arr.length ; i++){
                //call back function
            arrRes.push(fn(arr[i]));

        }
        return arrRes;

}
function calAge(yr){
    return 2020 - yr;
}
function isFullAge(yr){
    return yr >= 18;
    //this will return true or false value
}
function maxHeartrate(yr){
    if(yr>=18 && yr <= 81){
    return Math.round(206.7-(0.67*yr));
    //round method just round the values
    }
    else{
        return -1;
    }
}
var ages = arrayCal(years,calAge);
var isFullAges = arrayCal(ages,isFullAge);
var HeartRate = arrayCal(ages,maxHeartrate);
console.log(years);
console.log(ages);
console.log(isFullAges);
console.log(HeartRate);

//function returning function

/*
function interviewQuestion(job){

        if(job=="teacher"){
            return function(name){
                console.log(name+" What Subject Do you teach : ?");
            }
        }
        else if(job=="driver"){
            return function(name){
                console.log(name+" Which Vehicle do you drive");
            }
        }
        else{
            return function(name){
                console.log("Hello "+name+" What do you do ?");
            }
        }

}
var teacherQuestion = interviewQuestion("teacher");
var driverQuestion = interviewQuestion("driver");

teacherQuestion("Harry");
driverQuestion("Shariq");

*/
//we can also call like that

interviewQuestion("teacher")("john");
interviewQuestion("designer")("mark");


//IIFI
//iifi is used to create data previacy it doesnt interfere with gloabl execution
//see e.g below

(function game(){

    var score = Math.random()*10;
    console.log(score>=5);

})();
//when we have parameters
(function game(goodluck){

    var score = Math.random()*10;
    console.log(score>=5-goodluck);

})(2);

//closures
//inner function have always access to its outer function's parameters and variable even its returned
//see e.g below


function retirement(RetirementAge){

    var a = " years left for retirement";
    return function(birth){
        var age = 2020 - birth;
        //retirementAGe parameter and a variable  have access here even they r outside
        console.log((RetirementAge-age)+a);
    }
}

var retirementPk = retirement(60);
retirementPk(2000);

//coding challenge
//do again below example with closure

function interviewQuestion(job){
       return function(name){
    if(job=="teacher"){
              console.log(name+" What Subject Do you teach : ?");
        }
    
    else if(job=="driver"){
        
            console.log(name+" Which Vehicle do you drive");
        }
    
    else{
        
            console.log("Hello "+name+" What do you do ?");
        }
    }

}
var teacherQuestion = interviewQuestion("teacher");
var driverQuestion = interviewQuestion("driver");

teacherQuestion("Harry");
driverQuestion("Shariq");

//we can also call like that

interviewQuestion("teacher")("john");
interviewQuestion("designer")("mark");




