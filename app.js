const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({msg:'Testing'});

});


app.listen(5000 , ()=>console.log('Running'));