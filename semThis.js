const form = document.querySelector('[data-js="form"]')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.cep)
})

