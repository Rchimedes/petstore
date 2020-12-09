const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (_,res) => res.sendFile(__dirname + '/public/dist/public/index.html'));


app.listen(port, () => {
console.log('The party has started on port', port);
});