import {
    animate
} from "./helpers"

const orderCall = () => {
    const substrate = document.querySelector('.overlay')
    const callBackBtn = document.querySelector('.btn-block')
    const callbackMaster = document.querySelectorAll('.btn-sm')
    const closeBtns = document.querySelectorAll('.header-modal__close, .services-modal__close')

    let currentModal

    const animatedModal = (toggle, opacity) => {
        if (currentModal) {
            currentModal.style.opacity = opacity
            substrate.style.opacity = opacity

            animate({
                duration: 200,
                timing(timeFraction) {
                    return timeFraction
                },
                draw(progress) {
                    if (toggle === "block") {
                        currentModal.style.display = toggle
                        currentModal.style.opacity = opacity + progress
                        substrate.style.display = toggle
                        substrate.style.opacity = opacity + progress
                    } else {
                        currentModal.style.opacity = opacity - progress
                        substrate.style.opacity = opacity - progress
                        if (currentModal.style.opacity <= 0 && substrate.style.opacity <= 0) {
                            currentModal.style.display = toggle
                            substrate.style.display = toggle
                        }
                    }
                }
            })
        }
    }
    const eventModal = (toggle, modal) => {
        currentModal = modal
        toggle === "block" ? animatedModal(toggle, 0) : animatedModal(toggle, 1)
    }
    callBackBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const modalToOpen = document.querySelector('.header-modal')
        eventModal('block', modalToOpen)
    })
    callbackMaster.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const modalToOpen = document.querySelector('.services-modal')
            eventModal('block', modalToOpen)
        })
    })
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault()
            eventModal('none', currentModal)
        })
    })
    substrate.addEventListener('click', (e) => {
        if (currentModal && !currentModal.contains(e.target)) {
            eventModal('none', currentModal)
        }
    })
}

export default orderCall