const animate = ({
    timing,
    draw,
    duration
}) => {
    const start = performance.now()

    requestAnimationFrame(function animate(time) {

        let timeFraction = (time - start) / duration
        if (timeFraction > 1) timeFraction = 1

        const progress = timing(timeFraction)

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate)
        }
    })
}

export {
    animate
}