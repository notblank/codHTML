

function add(first, second, callback) {
	console.log(first + second);
	if(callback){
		callback();
	}
}


function logDoneDone(){
	console.log('done done')
}

add(2,4, function(){
	console.log('done');
});


add(4,88, logDoneDone);
add(4,88);

