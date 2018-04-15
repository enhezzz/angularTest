const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.static(path.resolve(__dirname,'dist')));
app.get('**',function(req,res){
    const home = fs.readFileSync(path.resolve(__dirname,'dist/index.html'),'utf8');
    res.set('Content-Type', 'text/html');
    res.send(home);
    res.end();
})
app.listen(8080,'localhost',function () {
    console.log('listening...')
  })