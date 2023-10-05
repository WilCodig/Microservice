const mongoose = require("mongoose");
const { Schema, Types } = require("mongoose"); //  mongoose
// const { ObjectId } = require("mongodb");

const planetSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  rotation_period: { type: String },
  orbital_period: { type: String },
  diameter: { type: String },
  climate: { type: String },
  gravity: { type: String },
  terrain: { type: String },
  surface_water: { type: String },
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" },  // type: ObjectId, ref: "Film"
  ],
});
planetSchema.statics.list = async function() {
  return await this.find()
  .populate("residents", ["_id", "name"])
  .populate("films", ["_id", "title"]);
}
planetSchema.statics.getById = async function(id) {
  return await this.findById(id)
  .populate("residents", ["_id", "name"])
  .populate("films", ["_id", "title"]);
}
planetSchema.statics.insert = async function(planet) {
  return await this.create(planet)
}

module.exports = mongoose.model("Planet", planetSchema);