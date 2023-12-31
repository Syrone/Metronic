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

		if (value.length === emailCodeInputs.length) {
			emailCodeInputs.forEach((input, i) => { input.value = value[i] })
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

	//** (Start) Buttons Back **/
	const backButtons = document.querySelectorAll('.btn-back');

	if (backButtons.length > 0) {
		backButtons.forEach(function (button) {
			button.addEventListener('click', function () {
				history.back();
			});
		});
	}
	//** (End) Buttons Back **/

	//** (Start) Custom Display Maxlength **/
	const maxLengthInputBlocks = document.querySelectorAll('[data-custom-input-maxlength="true"]');

	if (maxLengthInputBlocks.length > 0) {
		maxLengthInputBlocks.forEach(function (block) {
			const input = block.querySelector('input');
			const display = block.querySelector('[data-custom-display-maxlength="true"]');

			if (input && display) {
				const maxLength = input.getAttribute('maxlength');

				const updateCharacterCount = function () {
					const currentLength = input.value.length;
					display.textContent = `${currentLength}/${maxLength}`;
				};

				input.addEventListener('input', updateCharacterCount);

				updateCharacterCount();
			}
		});
	}
	//** (End) Custom Display Maxlength **/

})
