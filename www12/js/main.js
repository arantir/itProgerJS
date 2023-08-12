//var text = document.getElementById('text');
//console.log(text.id);
//console.log(text.title);

/*
text.title = "New text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New<br>string";
*/

//document.getElementById('text').style. color = "white";

/*
var spans = document.getElementsByTagName('span');

for (var i = 0; i < spans.length; i++) {
	console.log(spans[i].innerHTML);
}
*/

/*
var spans = document.getElementsByClassName('simple-text');

for (var i = 0; i < spans.length; i++) {
	console.log(spans[i].innerHTML);
}
*/

document.getElementById('main-form').addEventListener("submit", checkForm);

//function checkForm(el) {
function checkForm(event) {
	event.preventDefault();

	var el = document.getElementById('main-form');
	//console.log("Text");
	//var name = document.getElementById('name').value;
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;

	var fail = "";

	if (name == "" || pass == "" || state == "")
		fail = "Заполните все поля";
	else if (name.length <= 1 || name.lenght > 50)
		fail = "Введите корректное имя";
	else if (pass != repass)
		fail = "Пароли должны совпадать";
	else if (pass.split("&").length > 1)
		fail = "Некорректный пароль";

	if (fail != "") {
		document.getElementById('error').innerHTML = fail;
		//return false;
	}
	else
	{
		alert("Все данные корректно заполнены");
		//return true;
		window.location = 'https://itproger.com';
	}

	//console.log(name);
	//console.log(state + " - " + pass + " - " + repass);
	//return false;
	//return false;
}