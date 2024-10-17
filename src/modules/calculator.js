const calculator = () => {
    const calcBlock = document.querySelector('#calc .container')

    const calcType = document.querySelector('#calc-type')

    const calcTypeMatherial = document.querySelector('#calc-type-material')
    const calcSquare = document.querySelector('#calc-input')
    const calcTotal = document.querySelector('#calc-total')

    const regExpSquare = /^[0-9]+$/

    const calcCount = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcTypeMatherialValue = +calcTypeMatherial.options[calcTypeMatherial.selectedIndex].value
        const calcSquareValue = calcSquare.value

        if (!isNaN(calcTypeValue) && !isNaN(calcTypeMatherialValue)) {
            let totalValue = Math.round(calcTypeValue * calcTypeMatherialValue *
                calcSquareValue)
            calcTotal.textContent = totalValue
        } else {
            calcTotal.textContent = 0
        }

    }
    const checkCalcBlock = () => {
        if (calcBlock) {

            const validInput = (selector) => {
                selector.addEventListener('input', (e) => {
                    e.preventDefault()
                    e.target.value = e.target.value.match(regExpSquare, '')
                })
            }
            const changeOption = () => {
                const changeCalcType = calcType.options[0]
                const changeCalcTypeMatherial = calcTypeMatherial.options[0]

                changeCalcType.text = 'Это обязательное поле*'
                changeCalcTypeMatherial.text = 'Это обязательное поле*'
            }
            calcBlock.addEventListener('input', (e) => {
                e.preventDefault()
                if (e.target === calcType || e.target === calcTypeMatherial ||
                    e.target === calcSquare) {
                    calcCount()
                }
            })
            changeOption()
            validInput(calcSquare)
        }
    }
    checkCalcBlock()

}

export default calculator