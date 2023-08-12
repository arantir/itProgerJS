//setInterval(my_func, 1000);

/*
var counter = 0;
function my_func(){
	counter++;
	console.log("Counter: " + counter);
}
*/

/*
var counter = 0;
setInterval(function() {
	counter++;
	console.log("Прошло секунд: " + counter);
}, 1000);
*/

/*
var counter = 0;

var id = setInterval(my_func, 1000);

function my_func(){
	counter++;
	console.log("Counter: " + counter);

	if (counter == 3){
		clearInterval(id);
	}
}
*/

/*
setTimeout(function() {
	console.log("Timer is working!");
}, 2000);
*/

setTimeout(my_func, 2000);

function my_func() {
	console.log("Timer is working!");
}