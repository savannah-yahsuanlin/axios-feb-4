const axios = require('axios')
const fetchData = document.querySelector('#fetch-button')
const content = document.querySelector('.content')	


fetchData.addEventListener('click', async()=>{
	const data = await axios.get('https://jsonplaceholder.typicode.com/users/')
	content.innerHTML = JSON.stringify(data).split(', ')
})