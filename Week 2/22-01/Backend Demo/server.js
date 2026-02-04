import exp from 'express';

const app = exp()

app.listen(3000,() => console.log("HTTP server listening in port 3000..."))

app.get('/users',(req,res)=>{

    res.json({message: "This response from GET"})
})

app.post('/user',(req,res)=>{
    res.json({message: "This response from POST"})
})

app.put('/users/id',(req,res)=>{
    res.json({message: "This response from PUT"})
})

app.delete('/users/id',(req,res)=>{
    res.json({message: "This response from DELETE"})
})