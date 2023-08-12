//alert("Какая хорошая погода!");
//alert("Какая хорошая погода!");
//alert("Какая хорошая погода!");

//var data = confirm("Вы сейчас дома?");
//console.log(data);
//if (data) {alert("Вы молодец!")} else{alert("Возвращайтесь.")}

//var data = prompt("Скажите сколько вам лет?", 20);
//console.log(data);

var person = null;
if (confirm("Вы точно уверены?")) {
	person = prompt("Введите ваше имя");
	alert("Привет, " + person)
}
else{
	alert("Вы нажали на Отмена");
}