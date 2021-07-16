document.addEventListener('DOMContentLoaded', (event) => {
if (event) {
    console.info('DOM loaded');
}

const searchForm = document.getElementById('searchForm')
const searchLake = document.getElementById('lakeSearch')
const searchBtn = document.getElementById('searchBtn')



if(searchBtn){
searchBtn.addEventListener('click', () => {
    e.preventDefault()

    const lakeParam = searchLake.value

    const findLake = {
        lake: lakeParam
    }
    console.log(`search for ${searchLake.value} Lake`)

    fetch(`/api/${lakeParam}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(findLake)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Search lake data', data)
        

    })

})
}


})