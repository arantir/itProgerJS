var counter = 0;

function onClickButton(el) {
	//alert('Вы нажали на меня');
	counter++;
	el.innerHTML = "Вы нажали на кнопку: " + counter;

	//console.log(el.name);
	//console.log(el.value);
	el.style.background = "red";
	el.style.color = "blue";

	el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
}

function onInput(el) {
	if (el.value == "Hello") {alert("И тебе привет!")}
	console.log(el.value);
}