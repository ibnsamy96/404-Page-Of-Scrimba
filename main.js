const coverElement = document.querySelector('.cover-text')

function updateMaxHeightOfSimilarElements(querySelector) {
    const similarElements = [...document.querySelectorAll(querySelector)]
    const heightsArray = similarElements.map(element => parseInt(window.getComputedStyle(element).getPropertyValue('height')))
    const maxHeight = Math.max(...heightsArray)

    similarElements.forEach(element => element.style.height = maxHeight + 'px')
}

function updateCardsHeight() {
    const querySelectorOfCoursesTitles = '.course-title h3'
    const querySelectorOfInstructorsNames = '.course-info h4'

    updateMaxHeightOfSimilarElements(querySelectorOfCoursesTitles)
    updateMaxHeightOfSimilarElements(querySelectorOfInstructorsNames)
}

window.addEventListener('DOMContentLoaded', updateCardsHeight)
window.addEventListener('resize', updateCardsHeight)


document.addEventListener('mousemove', (event) => {
    const mouseLocationX = event.clientX
    const mouseLocationY = event.clientY

    coverElement.style.top = mouseLocationX / 100 - mouseLocationY / 200 + 'px'
    coverElement.style.left = mouseLocationY / 100 - mouseLocationX / 200 + 'px'
})