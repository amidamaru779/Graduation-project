import {
    animate
} from "./helpers"

const orderCall = () => {
    const callbackBtn = document.querySelector('.button')

    const modal = document.querySelector('.header-modal')
    const substrate = document.querySelector('.overlay')
    const closeBtn = modal.querySelector('.header-modal__close')
    console.log(substrate);

    const animatedModal = (toggle, opacity) => {
        modal.style.opacity = opacity
        substrate.style.opacity = opacity
        animate({
            duration: 400,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                if (toggle === "block") {
                    modal.style.display = toggle
                    modal.style.opacity = opacity + progress
                    substrate.style.display = toggle
                    substrate.style.opacity = opacity + progress
                } else {
                    modal.style.opacity = opacity - progress
                    substrate.style.opacity = opacity - progress
                    if (modal.style.opacity <= 0 && substrate.style.opacity <= 0) {
                        modal.style.display = toggle
                        substrate.style.display = toggle
                    }
                }
            },
        });
    };

    const eventAnimatedModal = (toggle) => {
        toggle == "block" ? animatedModal(toggle, 0) : animatedModal(toggle, 1)
    };

    const eventNoAnimatedModal = (toggle) => {
        modal.style.display = toggle
        substrate.style.display = toggle
        toggle == "block" ? (modal.style.opacity = 1) : (modal.style.opacity = 0)
        toggle == "block" ? (substrate.style.opacity = 1) : (substrate.style.opacity = 0)
    };

    const eventModal = (toggle) => {
        window ? eventAnimatedModal(toggle) : eventNoAnimatedModal(toggle)
    }

    callbackBtn.addEventListener('click', (e) => {
        e.preventDefault()
        eventModal('block')
    })

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        eventModal('none')
    })
}

export default orderCall