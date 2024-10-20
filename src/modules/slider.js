const slider = () => {
    const sliderBlock = document.querySelector('#benefits')
    const slides = document.querySelectorAll('.benefits__item')
    const timeInterval = 2000

    let slideCount = 0
    let currentSlide = 0

    let interval

    const slideShow = () => {
        slides.forEach((item, index) => {
            item.style.display = "none"

            if (window.innerWidth >= 576) {
                slideCount = 3
                if (index >= currentSlide && index < currentSlide + slideCount) {
                    item.style.display = "block"
                }
            } else {
                slideCount = 1
                if (index === currentSlide) {
                    item.style.display = "block"
                } else {
                    item.style.display = "none"
                }
            }
        })
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
        slideShow()
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
        slideShow()
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'benefits__item-active')
        currentSlide += slideCount

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'benefits__item-active')
        slideShow()
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        prevSlide(slides, currentSlide, 'benefits__item-active')
        if (e.target.closest('.benefits__arrow--left')) {
            currentSlide -= slideCount


        } else if (e.target.closest('.benefits__arrow--right')) {
            currentSlide += slideCount

        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - slideCount
        }
        nextSlide(slides, currentSlide, 'benefits__item-active')
    })
    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.benefits-arrows')) {
            stopSlide()
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.benefits-arrows')) {
            startSlide(timeInterval)
        }
    }, true)

    slideShow()
    startSlide(timeInterval)

};

export default slider