const scroll = () => {
    const scrollButton = document.querySelector('.smooth-scroll')
    const firstSection = document.querySelector('#header')

    const toScroll = () => {
        const start = window.scrollY
        const end = 0
        const duration = 500
        let startTime

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            window.scrollTo(0, start + (end - start) * progress)
            if (progress < 1) {
                requestAnimationFrame(animation)
            }
        }

        requestAnimationFrame(animation)
    }

    const checkScrollButtonVisibility = () => {
        const sectionRect = firstSection.getBoundingClientRect();
        if (sectionRect.bottom <= 0) {
            scrollButton.classList.add('pointer')
            scrollButton.style.display = 'block'
        } else {
            scrollButton.style.display = 'none'
        }
    };

    window.addEventListener('scroll', () => {
        checkScrollButtonVisibility()
    });

    scrollButton.addEventListener('click', (e) => {
        e.preventDefault()
        toScroll()
    })

    checkScrollButtonVisibility()
}

export default scroll