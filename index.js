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
 
const app = express()
app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV) {
	app.use(express.static(path.resolve(process.cwd(), 'client/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
	})
}

	// .post('/translate', async (req, res) => {
	// 	try {
	// 		let answer = await answers.news('קורונה')
	// 		res.status(200).send({ answer }).end()
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// })
	app.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`))