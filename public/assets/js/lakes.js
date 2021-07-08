document.addEventListener('DOMContentLoaded', (event) => {
if (event) {
    console.info('DOM loaded');
}

const searchForm = document.getElementById('searchForm')
const searchBtn = document.getElementById('searchBtn')
const searchLake = document.getElementById('lakeSearch')



if(searchForm){
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(searchLake.value)
})

}
})