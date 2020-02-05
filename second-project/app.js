//we can create seperate model frim function expression inside IIFI
//IIFI basically means that it doesnt concern with global execution
//IIFI is an independent expression
//IIFI is applied on function expression
//you can access values or functions inside IIFI from return

//1st model
//BUDGET CONTROLLER
var budgetController = (function(){

        /*
    var x= 23;
    //closure is created thats why add function can access x
   var add =  function(a){
        return x+a;
    };
    return{
        //here u can access x or add function b/c closure is created
        PublicTest :function(b){
            return add(b);
        }
    };
    */


})();

//2nd Model
//UICONTROLLER
var UIController = (function(){

    var DOMStrings = {
        inputType : ".add__type",
        inputDes : ".add__description",
        inputValue : ".add__value",
        inputBtn : ".add__btn"
    };

    return{
        getinput : function(){
            return{
             type: document.querySelector(DOMStrings.inputType).value,
             description: document.querySelector(DOMStrings.inputDes).value,
             value:document.querySelector(DOMStrings.inputValue).value
    };
    
    },
    //if we want to public our DOM Strings to other model we have to pass in return
    returnDOM:function(){
        return DOMStrings;
    }
};
})();

//3rd or our main model

//APP CONTROLLER
var Controller = (function(budgetctrl,UIctrl){

    /*
        var z = budgetctrl.PublicTest(5);

        //for printing z
        return{
            PrintZ:function(){
                console.log(z);
            }
        };

        */
        var DOM = UIctrl.returnDOM();

        var ctrlAddItem = function(){

                
            //1. get the field input data

                var input = UIctrl.getinput();
                console.log(input);

            //2. put into budget controller
            //3. put into UI controller
            //4. calculate budget
            //5. update budget

            console.log("it works");

        }

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


})(budgetController,UIController); //it takes arguement