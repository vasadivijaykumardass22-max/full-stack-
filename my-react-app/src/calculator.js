const display = document.getElementById('display');

function appendValue(value) {
    if (!display) return;
    
    // Prevent starting with multiple operators (except minus for negative numbers)
    const operators = ['+', '*', '/', '%'];
    if (display.value === '' && operators.includes(value)) {
        return;
    }

    // Prevent consecutive operators
    const lastChar = display.value.slice(-1);
    const allOperators = ['+', '-', '*', '/', '%'];
    if (allOperators.includes(lastChar) && allOperators.includes(value)) {
        display.value = display.value.slice(0, -1) + value;
        return;
    }

    // Prevent multiple decimals in the same number segment
    if (value === '.') {
        const parts = display.value.split(/[+\-*/%]/);
        const currentPart = parts[parts.length - 1];
        if (currentPart.includes('.')) {
            return;
        }
    }

    display.value += value;
}

function clearDisplay() {
    if (display) {
        display.value = '';
    }
}

function deleteLast() {
    if (display) {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    if (!display || !display.value.trim()) return;

    try {
        // Sanitize input to only allow valid mathematical expression characters
        const expression = display.value;
        if (!/^[0-9+\-*/. %()]+$/.test(expression)) {
            display.value = 'Error';
            return;
        }

        // Replace percentage with /100 for evaluation
        const sanitizedExpr = expression.replace(/%/g, '/100');

        // Evaluate expression safely using Function constructor
        const result = new Function(`return ${sanitizedExpr}`)();

        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = 'Error';
        } else {
            // Round to 8 decimal places to avoid floating point precision issues
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch {
        display.value = 'Error';
    }
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
