// DISPLAY
const display = document.querySelector('#display');

// TECLAS
const btNum = document.querySelectorAll('#num');
const btClear = document.querySelector('#clear');
const btBack = document.querySelector('#back');

// Apaga valores do display
btClear.addEventListener('click', () => display.innerHTML = '');

// Adiciona numeros no display
if (display.innerHTML.length < 10) {
	for (let i = 0; i < btNum.length; i++) {
		btNum[i].addEventListener('click', function() {
			display.innerHTML += btNum[i].innerText;
		})
	}
}

// Desfaz últimos dígitos do display
btBack.addEventListener('click', function() {
	let arr = display.innerText.split('');
	arr.pop();

	let convert = arr.join('');
	display.innerHTML = convert;
	convert = '';
})

// ...
