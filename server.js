const express = require('express');
const app = express();
// logging framework
const morgan = require('morgan');
const PORT = 5489;

// use morgan for logging in development modus
app.use(morgan('dev'));
// serve static files from public folder
app.use(express.static('public'));

// listen port to incoming requests
app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`);
})