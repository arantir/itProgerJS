//var date = new Date();

//console.log(date.getFullYear());
//console.log(date.getMonth() + 1);
//console.log(date.getDate());
//console.log(date.getHours());
//console.log(date.getMinutes());
//console.log(date.getSeconds());

//console.log("Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

//date.setHours(23);
//date.setMinutes(23);

//console.log("Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

//var arr = [8, 90, 5, 7, 0, 8, 9];

//console.log(arr.length);
//console.log(arr.join(", "));
//console.log(arr.join("|||"));
//console.log(arr.sort());
//console.log(arr.reverse());
//console.log(arr.reverse().join(", "));

//var stroka = arr.reverse().join(", ");

//console.log(stroka);

//var stroka = arr.reverse().join(", ");

//console.log(stroka.split(", "));

class Person {
	constructor(name, age, happiness) {
		this.name = name;
		this.age = age;
		this.happiness = happiness;
	}

	info() {
		console.log("Человек: " + this.name + ". Возраст: " + this.age);
	}
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 25, false);

alex.name = 'alex2';
//console.log(alex);
//console.log(alex.name);
//console.log(alex.age);
//console.log(alex.name);
//console.log(bob.name);
alex.info();
bob.info();