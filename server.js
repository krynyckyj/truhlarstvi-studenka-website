const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/gallery', (req, res) => {
	res.sendFile(path.join(__dirname, 'gallery.html'));
});

app.use((req, res) => {
	res.status(404).send('Not Found');
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
