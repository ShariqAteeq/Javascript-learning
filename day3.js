//function

//function declaretion 
function calage(by){
    return 2020-by;
}
function retyearleft(fname,year){
    
    var age  = calage(year);
    console.log("Age is : "+age);

    var retyear = 60-age;
    if (retyear > 0){
    console.log(fname+" retires in "+retyear+" years");
    }
    else{
        console.log(fname+ " is already retired");
    }

}
var c = prompt("Enter Birth year to calculate age : ");
retyearleft("John",c);

//function expression
// in function expression we declare function in variable see following
//example

var whatdoyoudo = function(fname,job){
    switch(job){
        case "teacher":
            return fname+ " teaches the kids";
        case "driver":
            return fname+ " is driver";
        default:
            return fname+ " is jobless";
    }
}

console.log(whatdoyoudo("harry","teacher"));
console.log(whatdoyoudo("mike","driver"));
console.log(whatdoyoudo("john",""));

//expression is that return immediate single value like above function
//e,g : 2=3=6;
//statement is that dosnt produce immediate value its like action
//e.g if else loops..

//arrays

//initialize array
var names = ["harry","mark","mike","carry"];
var bye = new Array(12,34,23,11);

//mutate array data
console.log(names);
console.log(names.length);
names[6]="wao";
console.log(names);
names[names.length]="john";
console.log(names);