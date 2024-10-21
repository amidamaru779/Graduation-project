const slider = () => {
    const createSlider = (blockSelector, itemSelector, arrowLeft, arrowRight, itemClassActive, count) => {
        const sliderBlock = document.querySelector(blockSelector)
        const slides = document.querySelectorAll(itemSelector)

        let slideCount = 0
        let currentSlide = 0

        const slideShow = () => {
            slides.forEach((item, index) => {

                item.style.display = "none"

                if (window.innerWidth >= 576) {
                    slideCount = count
                    if (index >= currentSlide && index < currentSlide + slideCount) {
                        item.style.display = "block"
                    }
                } else {
                    slideCount = 1
                    if (index === currentSlide) {
                        item.style.display = "block"
                    }
                }
            })
        }

        const prevSlide = (elems, index) => {
            elems[index].classList.remove(itemClassActive);
            slideShow()
        }

        const nextSlide = (elems, index) => {
            elems[index].classList.add(itemClassActive);
            slideShow()
        }

        sliderBlock.addEventListener('click', (e) => {
            e.preventDefault()

            prevSlide(slides, currentSlide)
            if (e.target.closest(arrowLeft)) {
                currentSlide -= slideCount
            } else if (e.target.closest(arrowRight)) {
                currentSlide += slideCount
            }

            if (currentSlide >= slides.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = slides.length - slideCount
            }
            nextSlide(slides, currentSlide)
        })
        window.addEventListener('resize', slideShow)
        slideShow()
    }
    createSlider('#benefits', '.benefits__item', '.benefits__arrow--left', '.benefits__arrow--right', 'benefits__item-active', 3);
    createSlider('#services', '.service-block', '.services__arrow--left', '.services__arrow--right', 'service-block-active', 2);
}

export default slider