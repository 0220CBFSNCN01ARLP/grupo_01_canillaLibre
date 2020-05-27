var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Initializaciones
const app = express();

// ************ Route System require and use() ************
const indexRouter = require("./routes/index");
const productRouter = require("./routes/rutasProducto"); //ruta al ruteador de fran

app.use(express.json());
app.use(cookieParser());

// setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(logger ("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);
app.use("/", productRouter);



// static files
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
