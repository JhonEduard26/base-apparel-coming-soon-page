const input = document.querySelector('.details__input')
const showErrorMsg = document.querySelectorAll('.hidden')
const formContainer = document.querySelector('.details__input-container')

const validate = () => {
  if (input.validity.typeMismatch) {
    showErrorMsg.forEach((node) => {
      node.classList.add('show')
      node.classList.remove('hidden')
      formContainer.style.outline = '2px solid #f96e7a'
    })
  } else {
    showErrorMsg.forEach((node) => {
      node.classList.add('hidden')
      node.classList.remove('show')
      formContainer.style.outline = '0'
    })
  }
}

const handleValidate = (event) => {
  console.log(event)
  if (!input.validity.valid) {
    validate()
    event.preventDefault()
  } else {
    validate()
  }
}

input.addEventListener('input', handleValidate)
