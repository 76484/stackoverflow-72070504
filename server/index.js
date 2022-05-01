const path = require("path");
const exphbs = require("express-handlebars");
const express = require("express");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "../views", "layouts"),
    partialsDir: path.join(__dirname, "../views", "partials"),
    defaultLayout: "main",
  })
);

app.get("/", (_req, res) => {
  res.render("pages/user", {
    user: {
      firstName: "John",
      lastName: "Doe",
      attributes: ["Friendly", "Happy", "Smart"],
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
