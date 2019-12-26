'use strict';

var express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload')


// require and use "multer"...

var app = express();
app.use(fileUpload())
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse',(req,res)=>{
  const type = req.files.upfile.mimetype;
  const name = req.files.upfile.name;
  const size = req.files.upfile.size;
  res.json({
    name : name,
    type : type,
    size : size
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
