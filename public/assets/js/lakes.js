document.addEventListener('DOMContentLoaded', (event) => {
if (event) {
    console.info('DOM loaded');
}

const searchForm = document.getElementById('searchForm')
const searchBtn = document.getElementById('searchBtn')
const searchLake = document.getElementById('lakeSearch')

const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    alert("hello!!!")
})

searchForm.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('searchLake')
    alert("HELLO")
})


})