var makeList = function () {
    function listConstructor() {
        this.listStarter = {
            head: null,
            data: "List Object",
            tail: null
        }
    }

    //pushNode assitance function
    function makeNewListNode(data) {
        var newNode = {
            prev: null,
            data: data,
            next: null
        }
        return newNode;
    }

    //pushNode assitance function
    function getOtherDirection(where) {
        switch (where) {
            case 'next':
                return 'prev';
            case 'prev':
                return 'next';
        }
    }

    function getDirection(where) {
        switch (where) {
            case 'head':
                return 'next';
            case 'tail':
                return 'prev';
        }
    }

    //listConstructor prototype
    var commonInfo = {

        pushNode: function (where, data) { // where = 'head' or 'tail'
            var direction = getDirection(where);
            var newNode = makeNewListNode(data);
            // list starter = null ---> empty list
            // if list is empty both head and tail point to nothing == null.
            if (this.listStarter[where] == null) {
                // list starter points at the first node from both head and tail.
                this.listStarter.head = newNode;
                this.listStarter.tail = newNode;
            } else {
                // listStarter.direction points to a listNode
                // Pushes newNode from direction side
                var otherDirection = getOtherDirection(direction);
                newNode[direction] = this.listStarter[where]; // new node points at current first node  - at direction place.
                this.listStarter[where][otherDirection] = newNode; // current first node points at new node - at otherDirection place.
                this.listStarter[where] = newNode;
            }
        },

        PopNode: function (where) {
            var direction = getDirection(where);
            if (this.listStarter.direction == null) {
                console.log("Nothing to pop!");
                return false;
            } else {
                var popData = this.listStarter[where].data;
                this.listStarter[where] = this.listStarter[where][direction];
                return popData;
            }
        },

        printFromHead: function () {
            var tmpNode = this.listStarter.head;
            while (tmpNode.next != null) { // we've reached the end of the list from the 'head' direction
                console.log(tmpNode.data);
                tmpNode = tmpNode.next;
            }
            console.log(tmpNode.data); // last node
        },

        findNodeByData: function (data, cmpFunc) {
            var nextNode = this.listStarter.head;
            var prevNode = this.listStarter.tail

            while ((nextNode != null) && (prevNode != null) && (cmpFunc(prevNode.data, nextNode.data) != 0)) { // we've reached the end of the list from the 'head' direction
                if (cmpFunc(data, nextNode.data) == 0) {
                    return ("found!");
                } else if (cmpFunc(data, prevNode.data) == 0) {
                    return ("found!");
                }
                nextNode = nextNode.next;
                prevNode = prevNode.prev;
            }
            return ("not found");
        }
    }

    listConstructor.prototype = commonInfo;
    return listConstructor;
}();


function cmpByFname(a, b) {
    var i = 0;
    do {
        if (a.fname[i] > b.fname[i]) {
            return -1;
        } else if (b.fname[i] > a.fname[i]) {
            return 1;
        } else if (a.fname[i] == b.fname[i]) {
            ++i;
        }
    } while (i < a.fname.length && b.fname[i] != a.fname[i]);
    return 0;
}
var myList = new makeList();

myList.pushNode('head', { fname: "Assaf", lname: "Cohen" });
myList.pushNode('head', { fname: "Einar", lname: "Barzilay" });
myList.pushNode('head', { fname: "Andrey", lname: "Kishtov" });
myList.pushNode('tail', { fname: "Lev", lname: "Davda" });
myList.pushNode('tail', { fname: "Alex", lname: "Peri" });
myList.pushNode('tail', { fname: "Yuval", lname: "Lerner" });
myList.printFromHead();
console.log(myList.findNodeByData({ fname: "Lev", lname: "Davda" }, cmpByFname));
console.log(myList.findNodeByData({ fname: "Yuval", lname: "Lerner" }, cmpByFname));
console.log(myList.findNodeByData({ fname: "Eyal", lname: "Segal" }, cmpByFname));
console.log(myList.findNodeByData({ fname: "Alex", lname: "Reichel" }, cmpByFname));
