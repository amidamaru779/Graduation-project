const timer = (deadLine) => {
    const timerDays = document.querySelectorAll('.count_1 span')
    const timerHours = document.querySelectorAll('.count_2 span')
    const timerMinutes = document.querySelectorAll('.count_3 span')
    const timerSeconds = document.querySelectorAll('.count_4 span')

    let interval

    const getTimeRemaining = () => {
        const dateStop = new Date(deadLine).getTime()
        const dateNow = new Date().getTime()

        let timeRemaining = (dateStop - dateNow) / 1000
        if (timeRemaining < 0) {
            timeRemaining = 0
        }
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(((timeRemaining / 60 / 60) % 24))
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        days = days < 10 ? "0" + days : days
        hours = hours < 10 ? "0" + hours : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        }
    }
    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerDays.forEach(day => {
            day.textContent = getTime.days
        })

        timerHours.forEach(hour => {
            hour.textContent = getTime.hours
        })
        timerMinutes.forEach(minute => {
            minute.textContent = getTime.minutes
        })
        timerSeconds.forEach(second => {
            second.textContent = getTime.seconds
        })
        if (getTime.timeRemaining === 0) {
            clearInterval(interval)
        }
    }
    updateClock()
    interval = setInterval(updateClock, 1000);
}

export default timer