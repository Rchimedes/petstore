const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());

app.listen(port, () => {
 console.log('listening on port', port);
});
