
    function ListConstructor() {
        this.head = null;
        this.tail = null;
        this.length  = 0;

    //method of constract object: creates new node
    function Node(data){
        this.data = data;
        //pointers
        this.next = null;
        this.prev = null;
    }

    ListConstructor.prototype.print = function (){
      // Assign the currentNode to the first element in the array
      var currentNode = this.head;
      // loop until the last element (null)
      while(currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }

    // create a new Node instance
     var newNode = new Node(data);

    //push new node to start of list
    ListConstructor.prototype.addToTheBeginning = function(newNode){
          var secondNode = this.head;
          this.head = newNode;
          this.head.next = secondNode;
          this.length++;
    };

    //method of constract object - push new node to end of list
    ListConstructor.prototype.addToTheEnd = function(val){
          var node = new Node(val);

        //if list is empty
        if(this.head === null){
            this.head = node;
            this.length++;
            return node;
          }
          // non empty
          var currentNode = this.head;
          while(currentNode.next){
            currentNode = currentNode.next;
          }
          currentNode.next = node;
          this.length++;
          return node;
        };

    //method of removing new node from list
      ListConstructor.prototype.removeItem = function(nodeToDelete){
        //if we want to delete first item
        if(this.head == nodeToDelete){
          this.head = nodeToDelete.next; //skip over
          this.length--;
          return;
        }

        var currentNode = this.head;

        while(currentNode != null){
          if(currentNode.next == nodeToDelete){
            currentNode.next = nodeToDelete.next;
            this.length--;
            return;
          }
        //move currentNode
        currentNode = currentNode.next;
      }
    };

    ListConstructor.prototype.removeItemByIndex = function(index){
      //delete first item
      if(index === 0) {
        this.head = this.head.next;
        this.length--;
        return;
      }

    }



       ListConstructor.prototype.findNode = function(data, compFunc){

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


        return{
          Node:Node,

        }
  };


    //rockenroll
    var mylist = new ListConstructor();

    //tests
    mylist.addToTheBeginning(5);
    mylist.addToTheBeginning(1);

    mylist.addToTheEnd(11);
    mylist.addToTheEnd(52);

    mylist.printList(12);

    mylist.removeItem();
    mylist.printList();
    mylist.removeItem();
    mylist.printList();
    console.log(list.findNode(12));
