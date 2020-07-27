var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

// routes
var indexRouter = require("./routes/index");
const authRouter = require("./routes/auth"); //rutas /auth /Registro
const productsRouter = require("./routes/products"); // Rutas /products
const carritoRouter = require("./routes/carrito"); // Rutas /products
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE
const vieweUsrLog = require("./middlewares/viewUsrLog");
const recordarmeMiddleware = require ("./middlewares/recordarmeMiddleware");
const apiProducts = require("./routes/api/products");
const apiAuth = require("./routes/api/auth");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.locals.toThousand = (n) =>
	n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//uses/
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "SecretBeer" }));
app.use(vieweUsrLog);



// archivos estaticos
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/carrito", carritoRouter);
app.use("/api", apiProducts);
app.use("/api", apiAuth);

app.use(recordarmeMiddleware);



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
