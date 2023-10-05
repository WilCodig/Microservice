const server = require("./src/server");
const { connectDB } = require("./src/db");

const port = process.env.PORT || 8004;


connectDB(
  server.listen(port, () => {
    console.log(`>> Server on port ${port}`);
  })
);