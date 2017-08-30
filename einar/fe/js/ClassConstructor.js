class Point {
  constructor(x=0,y=0){
    this.x = x;
    this.y = y;
  }
  distance(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

var pt = new Point(3,4);

//Each time you use extend - you are copying all of the pre-defined attributes and functionality from the "parent" class

class Circle extends Point {
  constructor(r=1,x=0,y=0){
    super(x,y)
    //super of circle is Point invokes Point's construcor
    this.radius = r;
  }
  isContainingOrigin(){
    return super.distance() < this.radius;
  }
  distance(){
    return 4444;
  }
}

var near = new Circle(6,3,4);
console.log(near.isContainingOrigin()); //true


////////

class myCoolArray extends Array {
  first(){return this[0];}
  last(){return this[this.length - 1];}
}

var a = new myCoolArray (111,222,333);
console.log(a);
console.log(a.length);
console.log(a.first());
console.log(a.last());

//////

class Base {
  constructor(){
    this.className = new.target.name; //return Object name(Base)
  }
}

var b = new Base();
console.log(b.className); //Base


class Derived extends Base {
  constructor(){
    super();
  }
  func(){
    console.log(new.target.name)
  }
}

var d = new Derived();
console.log(d.className); //Derived
d.func(); //error cause there new but theres no constructor it would work only inside constructor
