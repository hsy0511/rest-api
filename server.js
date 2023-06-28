const express = require('express');

const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

const users = [
    {
        id:"tjddud",
        name:"syher",
        email:"0511tjd@gmail.com"
    },
    {
        id:"tjd",
        name:"hersy",
        email:"0511tjddud@naver.com"
    }
];

server.get("/api/user",(req,res) => {
    res.json(users);
});

server.get("/api/user/:id",(req,res) => {
    const user = users.find(u => {
        return u.id === req.params.id;
    });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ errorMessage: "User was not found"});
    }
});

server.post("/api/user",(req,res) => { 
    users.push(req.body)
    res.json(users);
});

server.put('/api/user/:id', (req, res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if (foundIndex === -1){
        res.status(404).json({ errorMessage: "User was not found" });
    } else {
        users[foundIndex] = { ...users[foundIndex], ...req.body };
        res.json(users[foundIndex]);
    }
});

server.delete("/api/user/:id", (req,res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    if(foundIndex === -1) {
        res.status(404).json({ errorMessage: "Users was not found"});
    }else{
        let foundUser = users.splice(foundIndex, 1);
        res.json(foundUser[0]);
    }
});

server.listen(3000, () => {
    console.log("the server is running");
});