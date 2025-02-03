const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

//available routes
// app.get("/", (req, res) => {
//   res.send("Hello Varsha!");
// });

app.use("/api/auth/createuser", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
