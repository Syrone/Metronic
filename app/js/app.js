// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	//** (Start) Email Code Inputs **/
	const emailCodeInputs = document.querySelectorAll('.email-code input')

	emailCodeInputs.forEach((input, i) => {
		input.dataset.index = i
		input.addEventListener('paste', handleCodePaste)
		input.addEventListener('keyup', handleCode)
	})

	function handleCodePaste(e) {
		const data = e.clipboardData.getData('text')
		const value = data.split('')

		if(value.length === emailCodeInputs.length) {
			emailCodeInputs.forEach((input, i) => {input.value = value[i]})
			emailCodeSubmit()
		}
	}

	function handleCode(e) {
		const input = e.target;
		const value = input.value;
	
		input.value = '';
		input.value = value ? value[0] : '';
	
		const fieldIndex = parseInt(input.dataset.index); // преобразуем в число
	
		if (value.length > 0 && fieldIndex < emailCodeInputs.length - 1) {
			emailCodeInputs[fieldIndex + 1]?.focus(); // проверяем, что элемент существует перед вызовом focus()
		}
	
		if (e.key === 'Backspace' && fieldIndex > 0) {
			emailCodeInputs[fieldIndex - 1]?.focus(); // проверяем, что элемент существует перед вызовом focus()
		}
	
		if (fieldIndex === emailCodeInputs.length - 1) {
			emailCodeSubmit();
		}
	}

	function emailCodeSubmit() {
		//Something....
	}
	//** (End) Email Code Inputs **/

})
