const express= require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("welcome azure")
})

app.listen(3000,()=>{
    console.log('server listening at port 3000')
})