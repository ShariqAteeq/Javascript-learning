//we can create seperate model frim function expression inside IIFI
//IIFI basically means that it doesnt concern with global execution
//IIFI is an independent expression
//IIFI is applied on function expression
//you can access values or functions inside IIFI from return

//1st model
//BUDGET CONTROLLER
var budgetController = (function(){
        //create function constructor for all expensex and incomes b/c there are
        //lot of incomes and expenses means lots of objects thats why we make constructor
    var Expenxe = function(id,description,value){

            this.id = id;
            this.description = description;
            this.value=value;

    };
    var Income = function(id,description,value){

        this.id = id;
        this.description = description;
        this.value=value;

    };
    //all incomes and expenses data
    var data = {

        allItem:{
            inc:[],
            exp:[]
        },
        totals:{
            inc:0,
            exp:0
        }

    };
    return{

        addItem : function(type,des,val){
            var ID, newItem;
            //ID is assigned to every Income and exprenses object so later we can remove that from id
            //create new id
            if(data.allItem[type].length > 0){
            ID = data.allItem[type][data.allItem[type].length-1].id+1;
            }else{
                ID = 0;
            }
            //create new item based on inc or exp
            if(type==="exp"){
                newItem = new Expenxe(ID,des,val);
            } else if(type==="inc"){
                newItem = new Income(ID,des,val);
            }

            //push into data sctructure
            data.allItem[type].push(newItem);
            return newItem;
        },
        //since data is not accessible so we pass it into return
        testingData : function(){
            console.log(data);
        }

    };

})();

//2nd Model
//UICONTROLLER
var UIController = (function(){

    var DOMStrings = {
        inputType : ".add__type",
        inputDes : ".add__description",
        inputValue : ".add__value",
        inputBtn : ".add__btn",
        incomeContainer : ".income__list",
        expensesContainer : ".expenses__list"
    };

    return{
        getinput : function(){
            return{
             type: document.querySelector(DOMStrings.inputType).value,
             description: document.querySelector(DOMStrings.inputDes).value,
             value:document.querySelector(DOMStrings.inputValue).value
    };
    
    },

        //add items into UI

        addListItem : function(obj,type){

            var html , element , newHtml;

            //create html string with placeholder text
            if(type==="inc"){
                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if(type==="exp"){
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="expense-%id%Z">  <div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>'

            }
            //replace the placeolder text with actual data

                newHtml = html.replace("%id%",obj.id);
                newHtml = newHtml.replace("%description%",obj.description);
                newHtml = newHtml.replace("%value%",obj.value);

            //insert newhtml into DOM

                document.querySelector(element).insertAdjacentHTML("beforeend",newHtml);

        },

    //if we want to public our DOM Strings to other model we have to pass in return
        returnDOM : function(){
            return DOMStrings;
    }
};
})();

//3rd or our main model

//APP CONTROLLER
var Controller = (function(budgetctrl,UIctrl){

    var SetupEventListener = function(){

            var DOM = UIctrl.returnDOM();

            //this event is occured when user click yes button
            document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem);

            //this event occur when press enter key
            document.addEventListener("keypress",function(event){

            //enter keycode is 13
            //which method used in older browser
            if(event.keyCode===13 || event.which===13){
                ctrlAddItem();
            }
        });
    }

     var ctrlAddItem = function(){
        
            var input , newItem;
             
            //1. get the field input data

            input = UIctrl.getinput();
           
            //2. put into budget controller

            newItem = budgetctrl.addItem(input.type,input.description,input.value);

            //3. put into UI controller

            UIctrl.addListItem(newItem,input.type);

            //4. calculate budget
            //5. update budget    

        }
        //for accessing eventlistener function we have to pass in return b/c its IIFI
        return{
            init:function(){
                console.log("Application started")
                SetupEventListener();
            }
        }
       

})(budgetController,UIController); //it takes arguement
//call thi init function

Controller.init();