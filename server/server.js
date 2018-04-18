const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // Use port if heroku has when else just use 3000

app.use(express.static(publicPath));

// If the address doesn't match serve up index.html
app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
	console.log("server is up");
});