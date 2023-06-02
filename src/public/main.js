

const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

noteForm.addEventListener('submit', e => {
    e.preventDefault()

    if (savedID) {
        updateNote(savedID, title.value, description.value)
    } else {
        saveNote(title.value, description.value)
    }

    title.value = ''
    description.value = ''

    title.focus()
})
