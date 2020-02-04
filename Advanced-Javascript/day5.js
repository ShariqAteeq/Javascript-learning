//function constuctor


//constructor
var Person = function(name,birth,job){
    this.name = name;
    this.birth = birth;
    this.job = job;
}

//prototype is used to inherit method to constructor
Person.prototype.calage = function(){
    return this.age =  2020-this.birth;
    
}
//inhereit properties of person
Person.prototype.lastname = "wao";

//new keyword is used to creat empty object
var john = new Person("Harry",2000,"teacher");
var mark = new Person("jane",2002,"driver");

john.calage();
mark.calage();

console.log(john);
console.log(john.lastname);
console.log(mark.lastname);

//object.create

var personpro = {

    caage : function(){
        return 2020-this.bth;
    }
};

var j = Object.create(personpro);
j.name = "jarry";
j.bth = 2000;
j.age = j.caage();

//another method to create object
var m = Object.create(personpro,
    {
        name:{
            value:"shariq"
        },
        bth:{
            value:2002      
        },
        age:{
            value :2000
        },
    }  
    
    );
console.log(j);
console.log(m);

/*


    */