const servicesSlider = () => {

    const serviceBlock = document.querySelector('#services')
    const serviceSlide = document.querySelectorAll('.service-block')

    const timeInterval = 2000

    let slideCount = 0
    let currentSlide = 0

    let interval

    const slideShow = () => {
        serviceSlide.forEach((item, index) => {
            item.style.display = "none"

            if (window.innerWidth >= 576) {
                slideCount = 2
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
        prevSlide(serviceSlide, currentSlide, 'service-block-active')
        currentSlide += slideCount

        if (currentSlide >= serviceSlide.length) {
            currentSlide = 0
        }
        nextSlide(serviceSlide, currentSlide, 'service-block-active')
        slideShow()
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    serviceBlock.addEventListener('click', (e) => {
        e.preventDefault()

        prevSlide(serviceSlide, currentSlide, 'service-block-active')
        if (e.target.closest('.services__arrow--left')) {
            currentSlide -= slideCount


        } else if (e.target.closest('.services__arrow--right')) {
            currentSlide += slideCount

        }
        if (currentSlide >= serviceSlide.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = serviceSlide.length - slideCount
        }
        nextSlide(serviceSlide, currentSlide, 'service-block-active')
    })
    serviceBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.services-arrows')) {
            stopSlide()
        }
    }, true)
    serviceBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.services-arrows')) {
            startSlide(timeInterval)
        }
    }, true)

    slideShow()
    startSlide(timeInterval)
}

export default servicesSlider