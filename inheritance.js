//https://github.com/appacademy/curriculum/tree/master/javascript/projects/inherits_exercises
Function.prototype.inherits = function(func){
  function Surrogate(){};
  Surrogate.prototype = func.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;

  // this.prototype = Object.create(func.prototype);
  // this.prototype.constructor = this;
}


/*
How would you test Function.prototype.inherits? A few specs to consider:

You should be able to define methods/attributes on MovingObject that ship and asteroid instances can use.
Defining a method on Asteroid's prototype should not mean that a ship can call it.
Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.
The Ship and Asteroid prototypes should not be instances of MovingObject.

*/
