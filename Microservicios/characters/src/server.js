
// const express = require("express");
// const morgan = require("morgan");
// const charactersRoute = require("./routes/index")

// const server = express();

// server.use(morgan("dev"));
// server.use(express.json());
// server.use(require("./routes"));
// server.use("*", (req, res) =>{ //sin no encuentra ningun endpoint
//     res.status(404).send("Not found");
// });
// server.use((err, req, res, next) =>{ //manejador de errores 
//     res.status(err.statusCode || 500).send({ //res.status(500).send(err.message);
//         error: true,
//         message: err.message,

//     });
// });
const express = require("express");
const morgan = require("morgan");
const charactersRoute = require("./routes/index")

const server = express();

server.use(express.json());
server.use(morgan("dev"));


server.use("/Character", charactersRoute );

//errors handler
server.use("*", (req, res) => {
    res.status(404).send("Not found")
});
server.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        success: false,
        error: true,
        message: err.message,
    });
});

module.exports = server;