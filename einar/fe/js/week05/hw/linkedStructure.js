//main IIFE function
var makeList = function(){

    function ListConstructor() {
        this.head = null;
        this.tail = null;
        this.length  = 0;
    }

    //main object
    var constract = {};

    //method of constract object: creates new node
    constract.node = function(data){
        this.data = data;
        //pointers
        this.next = null;
        this.prev = null;
    }

    //method of constract object - push new node to start of list
    constract.pushStart = function(data){

           var newNode = new this.node(data);

           //if node is first then -
           if(this.head){
               this.head.prev = newNode;
               newNode.next = this.head;
               this.head = newNode;
           }
           else {
               this.head = newNode;
               this.tail = newNode;
           }
    };
    //method of constract object - push new node to end of list
    constract.pushEnd = function(data)
    {
        var newNode = new this.node(data);
        //if node is last then -
        if(this.head){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
                }
           else
           {
            this.head = newNode;
            this.tail = newNode;
            }

        return newNode;
    }
    //method of constract object - remove new node from start of list
    constract.popHead = function(){
        //save first node in temp
        var temp = this.head;
        //do the skip over
        if(this.head){
            this.head = this.head.next;
        }

        return temp;
     }

    //method of constract object - remove new node from end of list
    constract.popTail= function(){
      //save end node in temp
         var temp = this.tail;
         // do the skip over
         if(this.tail){
             this.tail = this.tail.prev;
         }
         return temp;
     }

  //method of constract object - find node and compare it's data
     constract.findNode = function(data, compFunc){

        if(this.head) {
            var current = this.head;
            var counter = 0;

            while(current.next != null) {
                if((current.data == data && compFunc == null) || compFunc(current.data,data)){
                    return countPos;
                    }
            current = current.next;
            counter++;
            }
        }

        return -1;
      }
    //assign prototype
    ListConstructor.prototype = constract;

    return ListConstructor;
  }();

    //rockenroll
    var mylist = new makeList();

    //tests
    mylist.pushStart(5);
    mylist.pushStart(1);

    mylist.pushEnd(11);
    mylist.pushEnd(52);

    mylist.printList(12);

    mylist.popHead();
    mylist.printList();
    mylist.popTail();
    mylist.printList();
    console.log(list.findNode(12));
