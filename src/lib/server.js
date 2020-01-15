require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('../_helpers/jwt');
const errorHandler = require('../_helpers/error-handler');
const fileUpload = require('express-fileupload');
path = require('path')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('../users/users.controller'));
app.use('/fishdata', require('../fishdata/fishdata.controller'));
app.use('/public', express.static(path.join(__dirname, '../../public')));
// global error handler
app.use(errorHandler);

app.post('/upload', (req, res, next) => {
	let imageFile = req.files.file;
	let savePath = path.join(__dirname, "../../public")
	imageFile.mv(`${savePath}/${req.body.filename}.jpg`, err => {
	if (err) {
		return res.status(500).send(err);
	}

	res.json({ file: `${savePath}/${req.body.filename}.jpg` });
	});
});

app.get("/fish.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/fish.jpg"));
});

// start server
//const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(process.env.PORT || 3000 , function(){
    console.log('Server listening on port ');
});
