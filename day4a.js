//hoisting 
//if we call function before declartion is called function hoisting 
//but its only poosible for function declaretion not for function expression

calage(2000); //we call function before declaretion
function calage(by){
    console.log("Age is : "+(2020-by));
}
//hoisting only work for function declaretion as abobe 
//it also doesnt work in variable see followinf exampe

console.log(s); // s is undefined coz its defined in nxt line
var s = 10;

//lexical scoping: child variable can access parent variable
//this function aloso point to window object

// Lecture: Scoping


// First scoping example
var i = 'Hello!';
first();
function first() {
    var j = 'Hi!';
    second();
    function second() {
        var k = 'Hey!';
        //console.log(ab+bb +cb);
    }
}

// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third();
    }
}
//third function only access to a and d variable c and b can use b/c of hoisting
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}