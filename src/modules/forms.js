const form = () => {
    const regExpName = /^[А-Яа-яЁёA-Za-z+$]/
    const regExpPhone = /^\+?[0-9]{0,16}$/

    const userName = document.querySelectorAll('.form-control[name="fio"]')
    const userPhone = document.querySelectorAll('.form-control[name="phone"]')

    const isUserDataValid = (regExp, data) => regExp.test(data)

    const userValid = () => {
        userName.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()

                if (isUserDataValid(regExpName, item.value)) {
                    item.classList.add('success')
                    item.setCustomValidity('')
                } else if (item.value.trim() === "") {
                    item.classList.remove('success')
                    item.setCustomValidity('Заполните это поле')
                } else {
                    item.classList.remove('success')
                    item.setCustomValidity('Ввод должен состоять из русских или латинских символов')
                }

            })
        })
        userPhone.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()

                if (isUserDataValid(regExpPhone, item.value)) {
                    item.classList.add('success');
                    item.setCustomValidity('');
                } else if (item.value.trim() === "") {
                    item.classList.remove('success');
                    item.setCustomValidity('Заполните это поле')
                } else if (item.value.length > 17) {
                    item.classList.remove('success')
                    item.setCustomValidity('Разрешён ввод только: + (плюс) и 16 цифр')
                } else {
                    item.classList.remove('success')
                }
            })
        })
    }
    userValid()
}

export default form