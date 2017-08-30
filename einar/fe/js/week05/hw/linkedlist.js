function LinkedList() {
  this._length = 0; //size of list
  this.head = null; //first node in list
  this.tail = null; //last node in list
}

function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function printList (){
 var currentNode = this.head;
// loop until the last element
  while (currentNode != null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
}

//create new node
var newNode = new Node(data)

function addToTheBeginning(newNode) {
  // Save the existing first item so it won't get lost.
  var secondElement = this.head;
  // assign new node at the beginning of the list.
  this.head = newNode;
  //reference it to the old first element.
  this.head.next = secondElement;
  // Increase lists length
  this.length++;
};

function addToTheEnd (value) {
    // Create the node INSIDE the function
    var node = new Node(value);

    // if list is empty assign new node to begining
    if (this.head === null) {
        this.head = node;
        this._length++;
        return node;
    }

    // for non-empty list
    var currentNode = this.head;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    //find the end of the list and add the item
    currentNode.next = node;
    this._length++;
    return node;
};

//delete
function deleteItem (nodeToDelete) {
  // If the item to delete is the first item
  if (this.head == nodeToDelete) {
    this.head = nodeToDelete.next;
    this._length--;
    return;
  }
  // iterate through the list until we find the nodeToDelete
  var currentNode = this.head;

  while (currentNode != null) {
    if (currentNode.next == nodeToDelete) {
      currentNode.next = nodeToDelete.next;
      this._length--;
      return;
    }

    currentNode = currentNode.next;
  }
};

//find
function findNode (index) {
  // If the item to find is the first item
  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  // Otherwise - loop though the list until we reach the index we want
  var currentNode = this.head;
  for (var i = 1; i < index; i++) {
    currentNode = currentNode.next;
  }
  currentNode.next = currentNode.next.next;
};
