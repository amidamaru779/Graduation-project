const sendForms = ({
    formName,
    someElem = []
}) => {
    const form = document.querySelector(formName);

    const loadText = "Загрузка..."
    const errorText = "Ошибка..."
    const successText = "Спасибо! Наш менеджер с Вами свяжется"

    const getBlock = () => {
        return form.querySelector(".status")
    }

    const getstatusBlock = (statusText) => {
        const statusBlock = getBlock()
        statusBlock.textContent = statusText
    }

    const createStatusBlock = (form) => {
        const statusBlock = document.createElement("div");
        statusBlock.classList.add("status")
        statusBlock.style.color = "black"
        form.append(statusBlock)
    }
    const validate = (list) => {
        let success = true
        list.forEach((input) => {
            if (!input.classList.contains('success')) {
                success = false
            }
        })
        return success
    }
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {

        const formData = new FormData(form)
        const formBody = {}
        const formElement = form.querySelectorAll('input[type="text"]')
        const calcBlock = document.querySelector('#calc .container')
        createStatusBlock(form)
        getstatusBlock(loadText)

        formData.forEach((val, key) => {
            formBody[key] = val
        })
        if (calcBlock) {
            someElem.forEach(elem => {
                const element = document.getElementById(elem.id)

                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent

                } else if (elem.type === 'input') {
                    formBody[elem.id] = element.value
                }

            })
        }
        if (validate(formElement)) {
            sendData(formBody)
                .then((data) => {
                    getstatusBlock(successText)

                    formElement.forEach((input) => {
                        input.value = ""
                    });
                    setTimeout(() => {
                        getBlock().remove()
                    }, 2000);
                })
                .catch((error) => {
                    getstatusBlock(errorText)
                });
        } else {
            getstatusBlock(errorText)
            setTimeout(() => {
                getBlock().remove()
            }, 2000);
        }
    };
    try {
        if (!form) {
            throw new Error('Пожалуйста введите правильную форму')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}
export default sendForms