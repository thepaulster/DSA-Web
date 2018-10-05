// Stack implementation

    class Stack{

        constructor(){
            this.count = 0;
            this.storage ={};
        }

        push(value){
            this.storage[this.count] = value;
            this.count++;
        }

        pop(){
            if (this.count === 0) {
                return undefined;
            }

            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }

        size(){
            return this.count;
        }

        peek(){
            return this.storage[this.count-1];
        }

        show(){
            var result = '';
            var i=this.count-1;

            for(i; i>=0; i--){
                result += this.storage[i] +' ';
            }

            return result;
        }

        isEmpty(){
            if (this.count==0) {
                return true;
            }else{
                return false;
            }
        }
    }

    var myStack = new Stack();

    function push(){
        var x, y;

        x = document.getElementById("form1");
        y = x.elements["name"].value;

        myStack.push(y);

        show();

    }

    function peek(){
        document.getElementById("demo").innerHTML = myStack.peek();
    }

    function pop(){
        myStack.pop();
        show();
    }

    function size(){
        document.getElementById("demo").innerHTML = myStack.size();
    }


    function show(){
            //var str =myStack.show();
            document.getElementById("demo1").innerHTML = myStack.show();
        }

    function isEmpty(){
        if (myStack.size==0) {
            return true;
        }
        document.getElementById("demo").innerHTML= myStack.isEmpty();

    }
