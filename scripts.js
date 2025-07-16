const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicators = document.querySelector('.numbers')

let active = 0
const total = items.length
let timer

function update(direction) {
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active++
        if (active === total) active = 0
    } else if (direction < 0) {
        active--
        if (active < 0) active = total - 1
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')
    numberIndicators.textContent = String(active + 1).padStart(2, '0')
}

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 5000)
}

prevButton.addEventListener('click', () => {
    update(-1)
    resetTimer()
})

nextButton.addEventListener('click', () => {
    update(1)
    resetTimer()
})

// Iniciar timer automático
resetTimer()
