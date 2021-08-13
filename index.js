const express = require('express')
const {Hebrew} = require('./hebrew')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000
// const answers = new Hebrew()
// answers.news('קורונה')

express()
	.use(cors())
	.use(express.json())
	.use(express.static(path.join(__dirname, '/client/build')))
	.get('*', (req, res) => res.sendFile(path.join(__dirname,'/client/build/index.html')))
	// .post('/translate', async (req, res) => {
	// 	try {
	// 		let answer = await answers.news('קורונה')
	// 		res.status(200).send({ answer }).end()
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// })
	.listen(PORT, () => console.log(`server run at http://localhost:${PORT}`))