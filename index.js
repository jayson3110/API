const express = require('express');
const app = express();
const PORT = 8000;


app.use(express.json())


app.get('/brandName', (req, res) =>{
	res.status(200).send({
		brandName: 'VV',
		year : '1989'
	})
});

app.post('/brandName/:id', (req,res) => {
	const {id} = req.param;
	const {logo} = req.body;

	if(!logo) {
		res.status(418).send({message: 'we need a logo'})
	}
	res.send({
		tshirt: `VV with your ${logo} and ID of ${id}`
	})
});

app.listen(
	PORT,
	() => console.log(`It's alive on http://localhost:${PORT}`)
)