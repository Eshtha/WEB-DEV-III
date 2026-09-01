const express=require("express");
const app=express();
const PORT=3000

const users=[
    {id:101, name:"Alex", email:"GZDlC@example.com"},
    {id:102, name:"Ravi", email:"ravi@com"},
    {id:103, name:"john", email:"john@com"},
    {id:104, name:"vasu", email:"vasu@com"},
]


app.get("/",(req,res)=>{
    res.send("Hello Students");
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hello from about</h1>");
})

app.get("/users",(req,res)=>{
    res.json(users);
})

app.get("/employees/:id",(req,res)=>{
    const employeeId = parseInt(req.params.id);
    const employee = users.find(u => u.id === employeeId);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send("Employee not found");
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});