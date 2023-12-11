class Calculator {

    // Функции класса | Class functions
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() { // Очищает прошлое поле и текущее | Clears previous and current fields
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() { // Удаляет 1 элемент с конца | Deletes 1 element from the end
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) { // Добаляет числа и не дает пользователю написать более 1 точки в число || Appending numbers and doesn't let user add more than 1 dot in the number
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operator) { // Считает числа и очищает нынешнее поле | Computes numbers and clears current field
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() { // Считает числа и очищает прошлое поле | Computes numbers and clear previous field
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '×':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) { // Выводит число на экран | Outputs the number on a screen
        const stringNumber = number.toString()
        const integerDigit = parseFloat(stringNumber.split('.')[0])
        const decimalDigit = stringNumber.split('.'[1])
        const floatNumber = parseFloat(number)
        let integerDisplay
        if (isNaN(integerDigit)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigit.toLocaleString('en', {maximumFractionDigits: 0}) // Добавляет запятые к большим числам, не добавляя нулей после точки | Adds commas to large numbers without adding zeros are dot
        }
        if (decimalDigit != null) {
            return `${integerDisplay}.${decimalDigit}`
        } else{
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

// Константы | Const
const numberButtons = document.querySelectorAll('[data-number]')
const opeartionButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const callClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// События | Events
numberButtons.forEach(button => {
    buttons.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})