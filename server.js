const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const exec = require('child_process').exec;

const scriptCmd = 'sudo PYTHONPATH=".:build/lib.linux-armv7l-2.7" python scripts/solid_color.py '

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/', (req, res) => {
  exec(scriptCmd + req.params.red + " " + req.params.blue + " " + req.params.green, (err, stdout, stderr) => {});
});

app.listen(port, () => console.log('Listening on 5000'));
