/*for(var i = 0; i < 10; i++) {
	console.log(i);
}*/
/*for(var i = 1; i <= 10; i++) {
	console.log(i);
}*/
/*for(var i = 100; i > 5; i /= 2) {
	console.log(i);
}*/
/*var j = 1000;
while (j > 100) {
	console.log(j);
	j -= 100;
}

var isHasCar = true;
while(isHasCar == true) {
	;
}*/

/*var x = 0;
do {
	console.log(x);
	x++;
} while(x < 10);*/

/*for (var i = 10; i <= 20; i += 2) {
	if (i > 15) {break;}

	console.log(i);
}*/

/*for (var i = 10; i <= 20; i++) {
	if (i % 2 == 0) {continue;}

	console.log(i);
}*/

var arr = [5, 7, 3, 8, 9, 91];

for (var i = 0; i < arr.length; i++) {
	arr[i] *= 2;
	console.log("Элемент " + (i + 1) + ": " + arr[i]);
}