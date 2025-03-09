var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// Configuração do view engine para usar EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Usando EJS em vez de Pug

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Definir as rotas
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Captura de erro 404 e redirecionamento para o handler de erro
app.use(function (req, res, next) {
  next(createError(404));
});

// Handler de erro
app.use(function (err, req, res, next) {
  // Define as variáveis locais para exibir as informações de erro
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Renderiza a página de erro usando EJS
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
