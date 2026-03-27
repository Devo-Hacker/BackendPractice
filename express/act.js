import express from "express";
import session from "express-session";

const app = express();
const PORT = 3000;
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Rohit", { maxAge: 10000 });
  res.send("Cookie set for 10 seconds!");
});

app.get("/check-cookie", (req, res) => {
  console.log("Cookies:", req.headers.cookie);
  res.send("Check terminal for cookie data");
});

app.get("/set-session", (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }

  res.send(`Session views count: ${req.session.views}`);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});