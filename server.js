const express = require('express')
require('dotenv').config()
const routes=require("./routes");

const app = express()

app.use('/api',routes);
app.get("/", async (req, res) => {
  // const result=await sendMail();
  res.send("Welcome to Gmail API with NodeJS");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
