const express = require('express');
const app = express();
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));


// test server
// app.get('/input', (req, res) => res.send('Hello World!'))


app.post('/post', (req, res) => {
	// console.log('inside the post')
	db.insertMovie(
		req.body.title, (error, results) => { 
			if (error) {
				res.status(500).send(error);
			} else {
				res.status(201).send(results)
				// console.log('this is req.body ', req.body);
				// console.log('this is results ', results);
			}
		}
	)	
})














app.listen(port, () => console.log('listening on port ', port))