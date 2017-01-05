
var a = 1;
// parent scope

function foo() {
	// child scope
	var a = 456;
	console.log(window.a);
	console.log(a);
}

function bar() {
	// child scope
	a = 456;
	console.log(a);
}

foo();
bar();