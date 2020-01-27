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
//previous index will be assigned empty
names[6]="wao";
console.log(names);
names[names.length]="john";
console.log(names);

//different data types
var tup = ["shariq",2000,false];
console.log(tup);
//push is used to add value on last index..
//unshift is used to add value in 0 index mean 1st
tup.push("hello");
tup.unshift(1);
console.log(tup);

//pop is used to remove last value
//shift is used to remove 1st index value

tup.pop();
console.log(tup);
tup.shift();
console.log(tup);

// indexof return the index of value
console.log(tup.indexOf(false));
//if the value is not present in array it returns -1 index lets see 
//following example
var isDesigner = tup.indexOf("DEsigner") === -1 ? "John is not designer"
:"john is designer";
console.log(isDesigner);

//coding challgenge for array/functiontip calculator

function tipcal(bill){
    var tip;
    if(bill<50){
        tip=0.20;
    }
    else if(bill>=50 && bill<=200){
        tip=0.15;
    }
    else{
        tip = 0.10;
    }
    return bill*tip;
}
var bills = [200,25,300];
console.log("Bills are : "+bills);
var Tips = [tipcal(bills[0]),tipcal(bills[1]),tipcal(bills[2])];
console.log(" Tips are : "+ Tips);
var totalAmountWithTip = [bills[0]+=Tips[0],bills[1]+=Tips[1],bills[2]+=Tips[2]];
console.log("Total amount with tips : "+totalAmountWithTip);

//object and properties like struct
//initialize objects
var bio = {
    firstname : "shariq",
    birthyear : 2000,
    isMarried : false,
    grades : ["A","B","C"]
};
//ways to print object
console.log(bio);
console.log(bio.firstname);
console.log(bio["birthyear"]);
var x = "grades";
console.log(bio[x]);

//new object syntax
var bioa = new Object();
bioa.firstname = "harry";
bioa["birthyear"] = 1212;
bioa.isMarried= false;
console.log(bioa);

//end in 2:56