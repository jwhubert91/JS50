const outputDivEl = document.querySelector('#output-text');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

const showMessage = () => {
	const inputValue = inputEl.value;
	const greetingHTML = `<h1>Hello and welcome, ${inputValue}</h1>`;
	outputDivEl.innerHTML = greetingHTML;
	inputEl.value = '';
}

buttonEl.addEventListener('click', showMessage);
