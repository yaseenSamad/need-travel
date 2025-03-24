const app = require('./src/app')
require('dotenv').config();

const PORT = process.env.PORT || '3001'

app.get('/',(req,res)=>{;
    res.send('welcome to need')
})

app.listen(PORT,async()=>{
    console.log(`server serves on ${PORT}`);
})