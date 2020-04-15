const outputEl = document.querySelector('div.output');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', () => {
	const inputValue = inputEl.value;
	const tipNumberResult = (inputValue * 0.15).toFixed(2);
	const tipRecommendEl = `<h1>You should tip $${tipNumberResult} on $${inputValue}</h1>`;
	outputEl.innerHTML = tipRecommendEl;
});