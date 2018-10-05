// Queue array implementation
function Queue(){
    // Queue properties - empty list
    collection = [];

    // Instance object methods

    this.print = function(){
        document.getElementById("demo").innerHTML = collection
        console.log(collection);
    };

    this.enqueue = function(element){
        collection.push(element);
    };

    this.dequeue = function(){
            return collection.shift();
    };

    this.front = function(){
        return collection[0];
    };

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function(){
        return(collection.length === 0);
    }
}



// Instance of the Queue object
var queue = new Queue();

var input = document.getElementById("input");

// Enqueue implemented through push method
function push(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    queue.enqueue(y);
    // Clear input field
    input.value = " ";

    peek();
}

// Peek method to show the elements
function peek(){
    var table = '';
    var rows = 1;
    var cols = queue.size();
    for(var r = 0; r < rows; r++){
        table += '<tr>';
        for(var c = 1; c <= cols; c++){
            table += '<td>' + queue.print() + '</td>';
        }
        table += '</tr>';
    }
    // Unresolved....
    if (queue.length == 0){
        //document.getElementById("demo1").innerHTML = '<table border="1">'+ ' ' +'</table>';
    }
    else{
        document.getElementById("demo1").innerHTML = '<table border="1">'+ table +'</table>';
    }

    input.value = " ";
}

// Dequeue implemented through pop() method
function pop(){
        queue.dequeue();
        input.value = " ";
        peek();

}

// Front method to show element at the front
function front(){
    document.getElementById("demo").innerHTML = queue.front();
}


// Size method to get number of elements
function size(){
    document.getElementById("demo").innerHTML = queue.size();
}

// isEmpty method to check whether the queue is empty
function isEmpty(){
    document.getElementById("demo").innerHTML = queue.isEmpty();
}
