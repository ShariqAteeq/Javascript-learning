//object and methods

var bio = {
    firstname : "shariq",
    birthyear : 2000,
    isMarried : false,
    grades : ["A","B","C"],
    calage : function(){
        return 2020 - this.birthyear;
    }
};
//this keyword is used to defined current object variable see aboove
console.log(bio.calage());

var bio = {
    firstname : "shariq",
    birthyear : 2000,
    isMarried : false,
    grades : ["A","B","C"],
    calage : function(){
       this.age = 2020 - this.birthyear; //if we dont put this keyword here we get error cause its not defined in function so for using object variable we have tw do it 
    }
};
bio.calage();
console.log(bio);

//coding challenge
var john = {
    fullname : "john dolton",
    height : 1.6,
    mass : 36,
    CalBMI : function(){
        this.JohnBMI = this.mass /(this.height*this.height);
    }
}
var mike = {
    fullname : "Mike war",
    height : 1.8,
    mass : 46,
    CalBMI : function(){
        this.MikeBMI = this.mass /(this.height*this.height);
    }
}
john.CalBMI();
mike.CalBMI();
console.log("John BMI is : "+john.JohnBMI+ " Mark BMI is : "+mike.MikeBMI);
if (john.JohnBMI > mike.MikeBMI){
    console.log(john);
}
else if (mike.MikeBMI > john.JohnBMI){
    console.log(mike);
}
else{
    console.log("Its draw");
}

//loop
var table = prompt("Enter Number for table ");
for(var i = 1; i<=10;i++){
  console.log(table+ " * "+i+ " = "+table*i);
}

 var s = [1,2,3,4,5,"shariq",2];
// for(var i = 0; i<s.length;i++){
//     console.log(s[i]);
// }

// i=0;
// while(i<s.length){
//     console.log(s[i]);
//     i++;
// }

//continue and break statement


for(var i = 0; i<s.length;i++){
    if(typeof s[i] !== "number")continue; //contine will handle ithat if tpe is different then skip it and mve to next
    console.log(s[i]);
}
for(var i = 0; i<s.length;i++){
    if(typeof s[i] !== "number")break; //break will not go ahead if type is different
         console.log(s[i]);
     }

     //backward loop
     for(i=s.length-1;i>=0;i--){
         console.log(s[i]);
     }

     //coding challenge
     var john = {
         bill : [124,48,268,180,42],
         tips: [],
         totalamountwithtip:[],
         tipcalculator : function(){
             var per;
                for(var i =0 ; i< this.bill.length;i++){
                    if(this.bill[i] < 50){
                        per=.20;
                    }
                    else if(this.bill[i] >=50 && this.bill[i] <= 200){
                       per=0.15;
                    }
                    else{
                        per=0.10;
                    }
                    this.tips[i]=this.bill[i]*per;
                    this.totalamountwithtip[i]=this.bill[i]+this.tips[i];
                }
         }
     } 
     var mike = {
        bill : [77,375,110,45],
        tips: [],
        totalamountwithtip:[],
        tipcalculator : function(){
            var per;
               for(var i =0 ; i< this.bill.length;i++){
                   if(this.bill[i] < 100){
                       per=.20;
                   }
                   else if(this.bill[i] >=100 && this.bill[i] <= 300){
                      per=0.10;
                   }
                   else{
                       per=0.25;
                   }
                   this.tips[i]=this.bill[i]*per;
                   this.totalamountwithtip[i]=this.bill[i]+this.tips[i];
               }
        }
    }
   

    
     john.tipcalculator();
     mike.tipcalculator();
     console.log("john");
     console.log(john.tips);
     console.log(john.bill);
     console.log(john.totalamountwithtip);
     console.log("mike");
     console.log(mike.tips);
     console.log(mike.bill);
     console.log(mike.totalamountwithtip);

    
     function calcualteAverage(tips){
        var sum=0;
           for(var i = 0; i < tips.length; i++)
               {
                   sum+=tips[i];
                   
               }
               return sum / tips.length;
                
    }
    john.avg= calcualteAverage(john.tips);
    mike.avg = calcualteAverage(mike.tips);
    console.log("John Tips Average : "+john.avg);
    console.log("Mike Tip Average : "+mike.avg);

    if (john.avg > mike.avg){
        console.log("John faimly pays highest tips");
    }else if(mike.avg>john.avg){
        console.log("mike family pays highest tips");
    }else{
        console.log("both pays same tips");
    }
    