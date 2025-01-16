document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let currentResult = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number') || button.classList.contains('decimal') || button.classList.contains('operator')) {
                if (value === '.' && currentInput.includes('.')) return;
                currentInput += value;
                updateDisplay();
            } else if (button.classList.contains('equals')) {
                calculate();
            } else if (button.classList.contains('clear')) {
                clear();
            } else if (button.classList.contains('backspace')) {
                backspace();
            }
        });
    });

    function updateDisplay() {
        userInput.textContent = currentInput;
    }

    function calculate() {
        try {
            currentResult = eval(currentInput).toString();
            result.textContent = currentResult;
        } catch (error) {
            result.textContent = 'Error';
        }
    }

    function clear() {
        currentInput = '';
        currentResult = '';
        userInput.textContent = '';
        result.textContent = '';
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
        if (currentInput === '') {
            result.textContent = '';
        }
    }
});

