const express = require("express");
const connect = require("./configs/db");
const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const PORT = 5500;

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err.message);
  }
  console.log(`Listening on ${PORT}`);
});
