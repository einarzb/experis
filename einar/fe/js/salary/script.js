
//constructor func for bst
function Tree(compareFunc){
  this.root = null;
  //here we save the data of the compareFunc
  this.compareFunc = compareFunc;
}

//constructor func for node
function Node(data) {
  this.data =  data;
  this.left = null;
  this.right = null;
}

//compares data function
function compareFunc(exp1,exp2){
  if (exp1 > exp2) {
    return 1;
  } else if(exp2 > exp1) {
    return -1;
  }
};

/*******************  prototype function of Tree MAIN function---> INSERT *********************/

Tree.prototype.insert = function(data) {
      var newNode = new Node(data);

      if(this.root === null) {
         this.root = newNode;
      } else {

       var currentNode = this.root;

       while(true){

        if(this.compareFunc(data,currentNode.data) === -1){
          if(!currentNode.left){
              currentNode.left = newNode;
              return;
            } else {
            currentNode = currentNode.left;
          }
        //if on left leaf(smaller num)
      } else {
        if(this.compareFunc(data,currentNode.data) === 1){
          if(!currentNode.right){
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    } //end of else (left leaf)
  }//end while
 }
};

/*******************  prototype function of Tree MAIN function---> FIND *********************/

Tree.prototype.find = function (data) {

   var current = this.root;

   while (current.data != data) {
       if (this.compareFunc(data, current.data) < 0) {
           current = current.left;
       } else if (this.compareFunc(data, current.data) > 0) {
           current = current.right;
       }
       if (current == null) {
           return null;
       }
   }
   return current;
}

/*******************  prototype function of Tree MAIN function---> to STRING *********************/

Tree.prototype.toString = function(){
    //pass object
    getFullTree(this.root);
}

function getFullTree(current){
  //if tree is empty
  if(current == null){
    return "tree is empty!";
  }
  return getFullTree(current.left) + getFullTree(current.right) + console.log(current.data);
}

/*******************  prototype function of Tree MAIN function---> FOR EACH *********************/

Tree.prototype.forEach = function(action, context, traverseMode){
//traverseMode: pre / in /post /
// stops if action fails return false
}

Tree.prototype.swapNodes = function (data) {
  var current = this.root;
  console.log("nodes before swap!");
  console.log('******************');
  console.log(current);
  console.log('******************');

    if (!current) {
        return;
    }
    if (current.right && current.left) {
        var temp;
        temp = current.right;
        current.right = current.left;
        current.left = temp;
    } else {
        if (current.left && !current.right) {
            current.right = current.left;
            current.left = null;
        }
        if (current.right && !current.left) {
            current.left = current.right;
            current.right = null;
        }
    }
    console.log("nodes are swapped!");
    console.log('******************');
    console.log(current);
    console.log('******************');
};
/*******************  GETTING HEIGHT AND LENGTH *********************/

var myTree = new Tree(compareFunc);

function height(myTree){
  if(!myTree)return 0;

  var leftHeight = height(myTree.left);
  var rightHeight = height(myTree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

Object.defineProperty(myTree, 'height', {
  enumerable:false,
  configurable: true,
  get:function(){
    return height(this.root);
    }
});


/***********************************************************************************
 * *********************************************************************************
 ****************************** TESTS PART******************************************
************************************************************************************
************************************************************************************/

//first invoke is root
myTree.insert(5);
myTree.insert(8);
myTree.insert(3);
myTree.insert(12);
myTree.insert(2);
console.log(myTree);
myTree.toString();
myTree.swapNodes();

/***************************
 *****my binary tree!*******
--------- root(5)----------
------(3)L-------R(8)-------
----(2)L------------R(12)---
***************************/

console.log("************************")
console.log(myTree.find(8));
console.log("************************")
console.log(myTree.height);
