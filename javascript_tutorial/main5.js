console.log(this);

var a = 1;
// console.log(this.a);
// could have done window.a or a or.. 

function foo(){
	console.log(this);
}

// foo();
// function runs on the scope of the context of the
// object that it sits on

var obj = {
	bar: function(one, two, three){
		console.log(this)
	}
};

//obj.bar();

// the context if object.

// call, apply, bind; 3 methods that change context.
// apply is like call.

// obj.bar.call(window, 1, 2, 3);

// all other arguments are passed to the function.

// obj.bar.bind(window);

// bind does not executes the function. It returns a bound object.

var  myBoundBar =  obj.bar.bind(window);

myBoundBar(3, 4, 5); // executes bar with the context window


// context is body. The element that was clicked. 
// $('body').on('click', obj.bar);

$('li').on('click', function(){
	var currentTimes = parseInt($(this).find('span').html());
	$(this).find('span').html(currentTimes + 1)
});


// show div

$('#opendiv').on('click', function(){
	$(this).toggleClass('active');
	$('#div1').slideToggle();
	console.log(this);
});