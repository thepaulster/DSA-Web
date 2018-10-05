// Linked list data structure implementation

function LinkedList(){
    var length = 0;
    var head = null;

    // Node function expression
    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    // Instance methods
    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element){
        var node =  new Node(element);
        if(head === null){
            head = node;
        }
        else{
            var currentNode =  head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

                currentNode.next = node;
        }

        length++;
    };

    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        }
        else{
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length --;
    };

    this.isEmpty = function(element){
        return length === 0;
    };

    this.indexOf = function(element){
        var currentNode = head;
        var index = -1;

        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    };

    this.elementAt = function(index){
        var currentNode = head;
        var count = 0;
        while(count < index){
            count ++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };

    this.addAt = function(index, element){
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if(index > length){
            return false;
        }

        if(index === 0){
            node.next = currentNode;
            head = node;
        }
        else{
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function(index){
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if(index < 0 || index >= length){
            return null
        }
        if(index === 0){
            head = currentNode.next;
        }
        else{
            while(currentIndex < index){
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        length--;
        return currentNode.element;
    }
}


// Linked list instance object
var ll = new LinkedList();

// Push method
function push(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    ll.add(y);

    // document.getElementById("demo").innerHTML="Hello "+y+"<br>";
    // document.getElementById("demo").innerHTML+=y + "is a very good tutor! <br>";
}

// Peek method
function peek(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    document.getElementById("demo").innerHTML = ll.elementAt(y);
    console.log(ll.head);

}

// Pop method
function pop(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    ll.removeAt(y);
}

// Size method
function size(){
    document.getElementById("demo").innerHTML = ll.size();
}

// IndexOf method
function indexOf(){
    var x, y;

    x = document.getElementById("form1");
    y = x.elements["name"].value;

    document.getElementById("demo").innerHTML = ll.indexOf(y);
}
