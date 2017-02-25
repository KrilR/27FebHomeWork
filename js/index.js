function getFibonacciCycle(index){
    var number=1;
    var nextNumber=1;
    var result;
    var i = 2;
    do {
        i++;
        result = number + nextNumber;
        number=nextNumber;
        nextNumber = result;
    } while (i < index);
    alert('Calculated in Cycle : ' + result);
}

function getFibonacciRecursion(index,previusNumber,currentNumber){
    if((typeof previusNumber == "undefined")||(typeof currentNumber == "undefined")) {
        previusNumber = 1;
        currentNumber = 1;
    }
    index--;
    if (index > 1)
    {
     var result = 0;
     previusNumber += currentNumber;
     result = getFibonacciRecursion(index,currentNumber,previusNumber);
     return result;
    }
    else {
        alert('Calculated in recursion : '+currentNumber);
        return currentNumber;
    }
} 