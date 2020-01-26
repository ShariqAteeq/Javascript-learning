//to write on cosole of browser

console.log("Hello world");
var s = "hello";
var b = 28;
var c = true;

//coercion
console.log(s+ " " +b+ " "+c);

//variable mutation
s = "world";
b = 25;
c = false;

alert(s+ " " +b+ " "+c);

//user input using prompt
let p = prompt("whats ur name");
console.log("string is "+p+ " "+s);

//basic operators
var a,b,c;
a= 10;
b= 6;
console.log("ans is ",a+2+b);

//logical
var z = a>b;
console.log(z);

//typeof operation that tell data type of a variable
console.log(typeof a);
console.log(typeof z);
console.log(typeof "hello");
console.log(typeof c);

//operator precedence
// (),+,-,*,/,%,>=,<=

var a = 200;
var b = 190;
var c = 18;
var ch = a-b<=c;
console.log(ch);

 a+=2;//202+2=202
 console.log(a);
 a+=10;//212
 console.log(a);
 a++;//213
 console.log(a);
