const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/envs");
const  Character = require("./database/schemas/characterSchema")
const  Film = require("./database/schemas/filmSchema")
const  Planet = require("./database/schemas/planetSchema");

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: "starwars"
        })
      console.log(">>DB Connected");
  } catch (error) {
      console.log(error);
  }
  };
  
  module.exports = {
    connectDB,
    Character,
    Film,
    Planet,
  };