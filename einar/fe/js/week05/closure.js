function makeLinkedList(){

  var linkedList; //just undefiend
  var returnAbleStuffInnerUseONly = {}; //empty object

  function setLinkedList(value){
    linkedList = value;
  }

  function getLinkedList(){
    return linkedList;
  }

  returnAbleStuffInnerUseONly.setList = setLinkedList;
  returnAbleStuffInnerUseONly.getList = getLinkedList;

  return returnAbleStuffInnerUseONly;
}

//invoke
var myLinkedList = makeLinkedList();
myLinkedList.setList(5);

console.log(myLinkedList.getList()); //5
