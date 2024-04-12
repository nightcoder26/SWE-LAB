const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(cors());
cors({ origin: "file:///D:/0WIN-SEM-2024/CSE2016-SWE/LAB/SWE/signup.html" });

let form = [
  {
    name: "John",
    email: "abc@gmail.com",
    password: "abc1234",
    username: "johnsmith",
    role: 0,
  },
];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res) => {
  const { name, email, username, password, role } = req.body;
  form.push({ name, email, username, password, role });
  res.json({ status: "ok" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = form.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    res.json({ status: "ok", role: user.role });
  } else {
    res.json({ status: "error" });
  }
});
