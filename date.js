//Making our own modules and exporting it.
//1. Wrap it inside a function.
//Whenever we export something that one is assigned to the variable that is required in the other file.
// module.exports = "This is imported from date.js file."  --Testing.

module.exports.getDate =  function(){
    let date = new Date();
        let options = {
            weekday:'long',
            day:'numeric',
            month:'long'
        }
   
     let today = date.toLocaleDateString("en-US",options);

    return today;
}

//If we need to export multiple functions. Remember module is an object so instead of binding entire module.exports to a single function, we can ause dot notation use assign multiple
// eg:- module.exports.getFunction1 = function1;
        /* function1(){
              function1 code here..
                     } 
     module.exports.getFunction2 = function2;
      function2(){
              function2 code here..
                } 
*/

    //Instead of assigning a named funtion to module.exports, we can assign an anonymous function directly to the module.exports.functionName.
    /* eg :- module.exports.function = function(){
                                            function code here
                                             } 
*/                                            