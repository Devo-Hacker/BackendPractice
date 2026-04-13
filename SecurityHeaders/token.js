import express from "express";
const app = express();
import jwt from "jsonwebtoken";
app.use(express.json());
const SECRET = "key123";

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ user: username }, SECRET, { expiresIn: "2m" });
    return res.send(token);
  }
  res.send("Invalid credentials");
});

app.get("/home", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.send("No token provided");
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.send("Invalid Token");
    }
    res.send("Hello Node js welcome back");
  });
});

app.listen(3000)