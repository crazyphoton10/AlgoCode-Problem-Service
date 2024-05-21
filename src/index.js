const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const BaseError = require("./errors/base.error");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ msg: "Problem Service is alive" });
});

//Last middleware if error comes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
