function isEven(number) {

        if (number % 2 === 0) {
            console.log("true");
            return number % 2 === 0;

        } else
                console.log("false");
                return number % 2 !== 0;

}

function factorial(num) {
    //defaine a result variable
    var result = 1;

   for(var i = 2; i <= num; i++){
       result *= i;
   }
   return result;
}

function kebabToSnake(str) {
    // replace all '-' with "_"'s
    // return str

    
    var newStr = str.replace(/-/g, "_");
    
    return newStr;
}


isEven(1);
isEven(2);
isEven(997);
isEven(2002);