//call,bind,apply

//method borrowing

var harry = {
    name: "harry",
    age:20,
    job:"teacher",
    presentation: function(style, TimeOfDay){
        if(style==="formal"){
            console.log("Good "+TimeOfDay+" Ladies & Gentlemen I\'m "
            +this.name+  " I\'m "+this.job+" I\'m "+this.age+
            " years old");
        }else if(style==="friendly"){
            console.log("Hey What\'s up ? I\'m "
            +this.name+  " I\'m "+this.job+" I\'m "+this.age+
            " years old Have a Nice "+TimeOfDay);
        }
    }
};
harry.presentation("formal","Morning");
var shariq = {
    name:"shariq",
    age:19,
    job:"designer"
};
//call method is used to take another object values and put into
//current object method see e.g

harry.presentation.call(shariq,"friendly","Night");

//apply method takes an arguement within array afterall its totally 
//same as call method see e.g

harry.presentation.apply(shariq,["friendly","night"]);

//bind method is used to preset the method parameters see e.g
//here we preset the formal style
var harryFormal = harry.presentation.bind(harry,"formal");
var shariqFormal = harry.presentation.bind(shariq,"formal");
harryFormal("Afternoon");
harryFormal("Morning");
shariqFormal("Morning");

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
//here this function take two arguements but callback function
//take only 1 arguement so we bind method here to preset one arguement
function isFullAge(limit,yr){
    return yr >= limit;
    //this will return true or false value
}

var ages = arrayCal(years,calAge);
//here we preset the values
var fullUs = arrayCal(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullUs);

//coding challenge
//mysolution
/*
var Question = function(ques,ans){
    this.ques = ques;
    this.ans = ans;
}


var question1 = new Question("Which City is it ?",["karachi","lahore"]);
var question2 = new Question("Which Country is it ?",["Pakistan","US"]);
var question3 = new Question("Which Area is it ?",["Malir","Shah-Faisal"]);

var allQuestions = [question1,question2,question3];

var ChooseRandomQuestion = {

    selectQuestion : function(){ 
     var randomNo = Math.floor(Math.random()*3);
    console.log("Q : "+allQuestions[randomNo].ques);
    console.log(" 1 : "+allQuestions[randomNo].ans[0]+"\n 2 : "+allQuestions[randomNo].ans[1]);
    var input = prompt("Enter Your Answer : ");
            if(input==1){
                console.log("Correct Answer");
            }else{
                console.log("Wrong Answer");
            }
    
}
}

var displayquestion = Object.create(ChooseRandomQuestion);
displayquestion.selectQuestion();

*/

//another solution
/*
(function(){
var Question = function(ques,ans,Correct){
    this.ques = ques;
    this.ans = ans;
    this.Correct = Correct;
}


var question1 = new Question("Which City is it ?",["karachi","lahore","Multan"],2);
var question2 = new Question("Which Country is it ?",["Pakistan","US"],0);
var question3 = new Question("Which Area is it ?",["Malir","Shah-Faisal","shadman"],1);

var allQuestions = [question1,question2,question3];

var randomNo = Math.floor(Math.random()*allQuestions.length);

Question.prototype.DisplayQuestion = function(){
    console.log("Q : "+this.ques);
    for (var i = 0 ; i<this.ans.length;i++){
        console.log(i+" : "+this.ans[i]);
    }
}
allQuestions[randomNo].DisplayQuestion();

Question.prototype.CheckAnswer = function(input){

    if(input===this.Correct){
        console.log("Correct Answer");

    }
    else{
        console.log("Wrong Answer");
    }

}
var ans = parseInt(prompt("Enter Your Answer : "));
allQuestions[randomNo].CheckAnswer(ans);

})();

*/
//expert level

(function(){
    var Question = function(ques,ans,Correct){
        this.ques = ques;
        this.ans = ans;
        this.Correct = Correct;
    }
    
    
    var question1 = new Question("Which City is it ?",["karachi","lahore","Multan"],2);
    var question2 = new Question("Which Country is it ?",["Pakistan","US"],0);
    var question3 = new Question("Which Area is it ?",["Malir","Shah-Faisal","shadman"],1);
    
    Question.prototype.DisplayQuestion = function(){
        console.log("Q : "+this.ques);
        for (var i = 0 ; i<this.ans.length;i++){
            console.log(i+" : "+this.ans[i]);
        }
    }
      
    Question.prototype.CheckAnswer = function(input,sco){
        //sco is a callback function
        var sc;
        if(input===this.Correct){
            console.log("Correct Answer");
            sc = sco(true);
        }
        else{
            console.log("Wrong Answer");
            sc = sco(false);
        }
            this.displayScore(sc);
    }
    Question.prototype.displayScore = function(scor){

        console.log("Your Current Score is : "+scor);

    }

    function score(){
            var sc = 0;
            return function(correct)
            {
                if(correct){
                sc++;
                }
                return sc;
            }

    }
    var keepscore = score();
    function nextQuestion(){

    var allQuestions = [question1,question2,question3];
    
    var randomNo = Math.floor(Math.random()*allQuestions.length);
    
    allQuestions[randomNo].DisplayQuestion();

    var answe = prompt("Enter Your Answer : ");

        if(answe !== "exit"){
            allQuestions[randomNo].CheckAnswer(parseInt(answe),keepscore);
            nextQuestion();
        }

     }
     nextQuestion();
    
    })();