const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

// app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./routes/api-routes");
app.use(routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
