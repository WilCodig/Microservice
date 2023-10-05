const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(
  "/Character",
  createProxyMiddleware({
    // target: "http://localhost:8001",
    target: "http://character_:8001",//compose
    changeOrigin: true,
  })
);
app.use(
  "/Film",
  createProxyMiddleware({
    // target: "http://localhost:8002",
    target: "http://film_:8002",//compose
    changeOrigin: true,
  })
);
app.use(
  "/Planet",
  createProxyMiddleware({
    // target: "http://localhost:8003",
    target: "http://planet_:8003",//compose
    changeOrigin: true,
  })
);
app.listen(8000, () => {
  console.log("Gateway on port 8000");
});

// module.exports = app