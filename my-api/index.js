const express = require("express");
const app = express();

app.use(express.json());

// simple GET API
app.get("/", (req, res) => {
  res.send("Hello API!");
});

// example API with data
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Niyaz" },
    { id: 2, name: "Kiran" }
  ]);
});

// POST API
app.post("/add-user", (req, res) => {
  const user = req.body;
  res.json({ message: "User added", user });
});

app.listen(5000, () => console.log("API running on port 5000"));
