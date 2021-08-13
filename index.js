const express = require('express')
// const answers = require('./hebrew')
const cors = require('cors')
const path = require('path')

// const getWeather = require('./controllers/getWeather');
// const getTranslate = require('./controllers/getTranslate');
// const getMeaning = require('./controllers/getMeaning');
// const getDirection = require('./controllers/getDirection');
// const getNews = require('./controllers/getNews');

const PORT = process.env.PORT || 5000
// const answers = new Hebrew()
// answers.news('קורונה')
 
express()
	.use(cors())
	.use(express.json())
	.use(express.static(path.join(__dirname, '/build')))
	.get('*', function (req, res) {
		const index = path.join(__dirname, 'build', 'index.html');
		res.sendFile(index);
	})
	// .post('/translate', async (req, res) => {
	// 	try {
	// 		let answer = await answers.news('קורונה')
	// 		res.status(200).send({ answer }).end()
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// })
	.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`))