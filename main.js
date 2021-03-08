function updateCardsHeight() {
    const querySelectorOfCoursesTitles = '.course-title h3'
    const querySelectorOfInstructorsNames = '.course-info h4'

    updateMaxHeightOfSimilarElements(querySelectorOfCoursesTitles)
    updateMaxHeightOfSimilarElements(querySelectorOfInstructorsNames)
}

function updateMaxHeightOfSimilarElements(querySelector) {
    const similarElements = [...document.querySelectorAll(querySelector)]
    const heightsArray = similarElements.map(element => parseInt(window.getComputedStyle(element).getPropertyValue('height')))
    const maxHeight = Math.max(...heightsArray)

    similarElements.forEach(element => element.style.height = maxHeight + 'px')
}

window.addEventListener('DOMContentLoaded', updateCardsHeight)
window.addEventListener('resize', updateCardsHeight)