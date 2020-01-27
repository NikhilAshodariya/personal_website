const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();


app.get("/", (req, res) => {
   res.send("This is great");
});

app.get("/nicks", (req, res) => {
    console.log("in nicks");
    res.send("this is nicks website");
});

app.listen(PORT, () => {
    console.log("server started at port ", PORT);
});