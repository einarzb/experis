
//construcor of linkedlist
function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

//Creating a new Node -> can be head or Tail.
    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

DoubleLinkedList.prototype.pushHead = function (data) {

        if (!this.head) {  //If first node
            this.head = new Node(data); //The head gets a value by clousre;
            this.tail = this.head;
        } else {
            var tmpNode = new Node(data);
            tmpNode.next = this.head;
            this.head.prev = tmpNode;
            this.head = tmpNode;
        }
        this.length++;
    };

    DoubleLinkedList.prototype.pushTail = function (data) {
        if (!this.head) {  //If first node
            this.tail = new Node(data);
            this.head = this.tail;
        } else {
            var tmpNode = new Node(data);
            tmpNode.prev = this.tail;
            this.tail.next = tmpNode;
            this.tail = tmpNode;
        }
        this.length++;
    };

    DoubleLinkedList.prototype.popHead = function () {
        var toReturn = null;
        if (this.head) {
            toReturn = this.head.data;
            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        this.length--;
        //console.log(toReturn);
        return toReturn;

    };

    DoubleLinkedList.prototype.popTail = function () {
        var toReturn = null;
        if (this.tail) {
            toReturn = this.tail.data;
            if (this.tail === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }
        //console.log(toReturn);
        this.length--;
        return toReturn;
    };

    DoubleLinkedList.prototype.pushAfter = function (dataToPushAfter, newData) {
        this.each(function (item) {
            if (item.data === dataToPushAfter) {
                var temp = new Node(newData);
                temp.next = item.next;
                if (item === this.head) this.head = temp;
                item.next = temp;
                return;
            }
        });
    }

    DoubleLinkedList.prototype.each = function (f) {
        var currNode = this.head;

        while (currNode !== null) {
            f(currNode);
            currNode = currNode.next;

        }
    };

    DoubleLinkedList.prototype.printList = function () {
        console.log("the list length is: ", this.length);
        this.each(function (item) {
            if (!item.data) {
                console.log("the list is empty! ");
            }
            console.log(item.data,"\n");
        });


    }
    DoubleLinkedList.prototype.findInList = function (data) {
        var indexOfItem;
        var result = false;
        if (!this.tail) {
            indexOfItem = 0;
        } else {
            indexOfItem = null;
        }
        this.each(function (item) {
            indexOfItem++;

            if (item.data == data) {
                result = true;
            }

        });
        if (result) {
            return console.log("the item", "'", data, "'", "was found inside this list at index #:", indexOfItem);
        } else {
            return console.log("the item", "'", data, "'", "was not found inside this list");
        }

    }
}

var testList = new DoubleLinkedList();

var runTests = function () {
    testList.pushHead("B");
    testList.pushHead("A");
    testList.pushTail("C");
    testList.pushTail("D");
    testList.pushAfter("B", "K  ");
    testList.findInList("C");
    console.log("\n");
    testList.printList();
    console.log("\n");
    testList.popHead();
    testList.popTail();

    console.log("\n");

    testList.printList();
    console.log("\n");
    //testList.popHead();
    testList.popTail();
    testList.findInList("C");
    console.log("\n");
    testList.printList();
};
runTests();
