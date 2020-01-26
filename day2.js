//challenge for operators
    //BMI
var jmass = 20; //kg
var jheight = 1.3; //meter

var hmass = 10;
var hheight = 2.4;

var JBMI = jmass/(jheight*jheight);
var HBMI = hmass/(hheight*hheight);
console.log("John BMI is "+JBMI+ " Harry BMI is "+HBMI);
var cal = JBMI>HBMI;
console.log("Is John BMI is greater than Harry BMI : "+cal);

//if statement
var age = 21;
if (age<13){
    console.log("boy is teenager");
}else if(age>=13 && age<=20){
    console.log("boy is young");
}else{
    console.log("boy is old");
}

//ternary operator

age = 13;

age >=18 ? console.log("Assign Beer") : console.log("Assign Juice");

var drink = age>=18 ? "Beer" : "Juice";
console.log("ASSIGNED : "+drink);

//switch operator
var job = "cleaner";

switch(job){
    case "teacher":
        console.log(job+" Teaches");
        break;
    case "driver":
        console.log(job+" drives");
        break;
    case "cleaner":
        console.log(job+" cleans");
        break;
    default:
        console.log("Invalid Service");
}

//switch by applying conditions on case
    age = 17;
    switch(true){
        case age<13:
            console.log("boy is teenager");
            break;
        case age>=13 && age<=20:
            console.log("boy is young");
            break;
        default:
            console.log("boy is old");

    }

    //trutly and falsy values
    // falsy values : undefined,null,'',Nam
    //truly values : not all falsy values

    var height = 0;
    height || height==0 ? console.log("Defined") 
    : console.log("Not Defined");

    //equity operator
    if (height==="0"){
        console.log("coercion type operator");
    }
    else{
        console.log("Not Coercion type");
    }
    // "==" covert a type then matches like height 
    //height value is 0 and we put it condition 0 so == operator return
    //true but if we use === operator it return false coz it dowsnt convert type

    //code challenge

    var jteam = (89+120+183)/3;
    var mteam = (116+94+123)/3;
    var cteam = (119+212+223)/3;

    console.log("John Team Average : "+jteam+ 
    "\nMike Team Average is : "+mteam+ "\nCarry Averagee is : "+cteam);

        console.log("John and Mike result")
    if (jteam>mteam){
        console.log("John Team Winner");
    }
    else if (jteam===mteam){
        console.log("Draw");
    }
    else{
        console.log("Mike Team Winner");
    }

    console.log("John, carry, mike result");
    if (jteam > mteam && jteam > cteam){
        console.log("John is winner");

    }
    else if (mteam > jteam && mteam > cteam){
        console.log("Mike Team Winner");
    }
    else if (cteam > jteam && cteam > mteam){
        console.log("Cary Team Winner")
    }
    else if (cteam==jteam==mteam){
        console.log("Draw");
    }
    else{
        console.log("Invalid");
    }