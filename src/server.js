const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require("./db/connection");
const Student = require("./models/student");

app.use(express.json());

//----------- creat new former

app.post('/student', (req, res)=>{
const user = Student(req.body)
console.log(req.body)
user.save().then(()=>{
    res.send(user);
}).catch((err)=>{
    res.sen(err);
})
});
// server listening
app.listen(port, ()=>{
    console.log(`server listening on port${port}`);
});