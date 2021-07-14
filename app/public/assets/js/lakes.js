document.addEventListener('DOMContentLoaded', (event) => {
if (event) {
    console.info('DOM loaded');
}

const searchForm = document.getElementById('searchForm')
const searchLake = document.getElementById('lakeSearch')



if(searchForm){
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const lakeParam = searchLake.value

    const findLake = {
        lake: lakeParam
    }
    console.log(`search for ${searchLake.value} Lake`)

    fetch(`/api/${lakeParam}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(findLake)
    }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        console.log('success')
    })

})
}


})