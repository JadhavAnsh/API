const express =  require("express");
const fs = require("fs");
const users = require("./API.json");

const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({ extended: false}));

//Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length});
    });
    console.log("Body", body);
});

app.patch("/api/users/:id", (req, res) => {
    // TODO: Edit the user with id
    return res.json({status: "pending"});
});

app.delete("/api/users/:id", (req, res) => {
     // TODO: Delete the user with id
    return res.json({status: "pending"});
});

app.listen(PORT, () => console.log('Sever Started at PORT: ${8000}'));
