var object1 = {
  name:"Orev",
  shwName: function(){
    console.log(this.name);
  }
}

object1.shwName(); //Orev

var object2 = {
  name:"Eagle",
  shwName: function(){
    console.log(this.name);
  }
}

object2.shwName(); //Eagle
