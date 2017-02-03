
/*https://www.youtube.com/watch?v=LmL0Gh193M0&index=2&list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif

=== Es6 tutorial ===

var is global.
let, const block scoped. But you cannot change const. 

use const. When object can edit content.
*/


/*=== Clases ===
Add functions to a class. 
*/
class Parent {
	// add some functions.
	contructor() {

	}

	// static class properties.
	age = 32;
	// a static function
	static foo(){

	}
}

var parent = new Parent();
parent.contructor;

// for static, you can write:
Parent.foo()

// can extend Parent class: 
class Child extends Parent {
	contructor(){
		super()
	}
}

// cannot extend static props.
var child = new Child();
child.contructor();

/*
=== generator funcions ===
*/


/*
=== arrow => funcions ===
*/

var foo = funcion(a, b){
	return a + b;
}

// can be written as 

var foo = (a, b) => {
	return a + b;
}

// useful when passing function as arguments. 

do.something( function(a, b) {
	return a + b;
});

// is written:
do.something((a, b)  => { return a + b; });

// implicit return, for 1 line calls
do.something((a, b)  => return a + b);

do.something(a => return a + a);
[1, 2, 3].map(val => val++); // gives [2, 3, 4]

// binds contex to this
var module = {
	age: 30,
	foo: function(){
		console.log(this.age);
	}
}

module.foo();

var module = {
	age: 30,
	foo: function(){
		setTimeout(function(){
			console.log(this.age);	
		}, 100)
	}
}

module.foo();
// would NOT work. You need to bind this to 
// the timeOut part bind(this). 
// Arrow functions automatically bind this. 


var module = {
	age: 30,
	foo: function(){
		setTimeout(() => {console.log(this.age);}, 100)
	}
}

module.foo();
// this should work ok. It points to module.

// careful when you use this value inside, like in jQuery.

// uses the value of this outside.
$("some-tag").with().jQuery(() => {
	$(this);
});

/*
=== Modules ===
*/

export var age = 56;

module.exports.foo = function() {

};

module.exports.bar = function() {

};

// to import in another file

var module1 = require("module1");
var foo = module1.foo;

// now
import module1 from "module1"
// can destructure too:
import {age as edad, foo, bar} from "module1"


