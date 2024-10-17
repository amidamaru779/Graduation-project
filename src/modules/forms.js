const form = () => {
    const regExpName = /[^А-Яа-яЁёA-Za-z]+$/
    const regExpPhone = /^\+?[0-9]{0,16}$/

    const userName = document.querySelectorAll('.form-control[name="fio"]')
    const userPhone = document.querySelectorAll('.form-control[name="phone"]')

    const userValid = () => {
        userName.forEach(item => {
            item.addEventListener('input', (e) => {
                e.preventDefault()
                e.target.value = e.target.value.replace(regExpName, '')
            })
        })
        userPhone.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.match(regExpPhone, '')
            })
        })
    }
    userValid()



}

export default form