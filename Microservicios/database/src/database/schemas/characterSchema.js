const mongoose = require("mongoose");
const { Schema, Types } = require("mongoose");

const characterSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  height: { type: String },
  mass: { type: String },
  hair_color: { type: String },
  skin_color: { type: String },
  eye_color: { type: String },
  birth_year: { type: String },
  gender: { type: String }, // puede ser un Enumtype: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.list = async function() {
  return await this.find()
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"]);
}
characterSchema.statics.getById = async function(_id) {
  return await this.findOne({_id})
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id", "title"]);
}
characterSchema.statics.insert = async function(character) {
  return await this.create(character)
}

module.exports = mongoose.model("Character", characterSchema);