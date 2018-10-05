// Recursion implementation

// Factorial algorithm
function factorial( n ) {
    // Base case
    if ( n === 1 ) {
        return 1;
    }
    else{
        return n * factorial( n - 1 );
    }
}

// Fibonacci algorithm
function fibonacci(num){
    var a = 1, b = 0, temp;

    if(num === 0){
        return b;
    }

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

// Implementation required here

// Factorial function to be displayed on browser window
function fact(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    factorial(y);
}


// Adding event listener and setting an interval for factorial recursive calls
var factButton = document.getElementById("factorial");

factButton.addEventListener(
    'click',
    function(){
        var x, y;
        x = document.getElementById("form1");
        y = x.elements["name"].value;
        document.querySelector("#factorial").disabled = true;
        var info = factorial_info(parseInt(y));
        var factCall = 1;
        var outputInterval = setInterval(
            function(){
                next = info.next();
                if (next.done) {
                    clearInterval(outputInterval);
                    document.querySelector("#factorial").disabled = false;
                }
            document.getElementById("factOutput").innerHTML = "Recursive Call " + factCall + " : " + next.value;
                factCall++;
            },
            1500
        );
    }
);

function* factorial_info(x) {
    let sofar = "";

    for (var i = x; i > 1; i--) {
        sofar += (i===x)? i.toString() : " * " + i.toString() ;
        yield sofar + " * " + (i-1).toString() + " ! ";
    }

    return factorial(x);
}


// Adding event listener and setting an interval for factorial recursive calls
var fibButton = document.getElementById("fibonacci");

fibButton.addEventListener(
    'click',
    function(){
        var x, y;
        x = document.getElementById("form1");
        y = x.elements["name"].value;
        document.querySelector("#fibonacci").disabled = true;
        var info = fibonacci_info(parseInt(y));
        var fibCall = 0;
        var outputInterval = setInterval(
            function(){
                next = info.next();
                if (next.done) {
                    clearInterval(outputInterval);
                    document.querySelector("#fibonacci").disabled = false;
                }
            document.getElementById("fibOutput").innerHTML = "Recursive Call " + fibCall + " : " + next.value;
                fibCall++;
            },
            1500
        );
    }
);


function* fibonacci_info(x) {
    let sofar = "";

    for (var i = x; i > 1; i--) {
        sofar += (i===x)? i.toString() : " + " + (i-1).toString() ;
        if(sofar += "")
        yield sofar + " + " + (i-2).toString();
    }

    return fibonacci(x);
}


// Fibonacci function to be displayed on browser window
function fibo(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    fibonacci(y);
    // document.getElementById("demo1").innerHTML = fibonacci(y);
}

function pop(){
        myStack.pop();
}

function size(){
    document.getElementById("demo").innerHTML = myStack.size();
}

function tab(){

    var table = '';
    var rows = 1;
    var cols = myStack.size();
    for(var r = 0; r < rows; r++){
        table += '<tr>';
        for(var c = 1; c <= cols; c++){
            table += '<td>' + myStack.disp() + '</td>';
        }
        table += '</tr>';
    }

    // document.write('<table>'+ table +'</table>');

    document.getElementById("demo1").innerHTML = '<table border="1">'+ table +'</table>';
}

// document.getElementById("demo1").innerHTML = '<table border="1">'+ table +'</table>';
