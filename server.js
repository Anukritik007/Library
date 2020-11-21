if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

app.set("view engine", "ejs"); //using ejs as view engine
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout"); // every single file is going to be in layout(so that header & footer need not be duplicated)

app.use(expressLayouts);
app.use(express.static("public")); //files such as styles, js
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter); //root route
app.use("/authors", authorRouter);

app.listen(process.env.PORT || 4300);
