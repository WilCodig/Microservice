const mongoose = require("mongoose");
const { Schema, Types } = require("mongoose"); //  mongoose
const { findById } = require("./planetSchema");


const filmSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  opening_crawl: { type: String },
  director: { type: String },
  producer: { type: String },
  release_date: { type: Date },
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function(){
  return await this.find()
  .populate("characters", ["id", "name"])
  .populate("planets", ["id", "name"]);
}
filmSchema.statics.getById = async function(id){
  return await this.findById(id)
  .populate("characters", ["id", "name"])
  .populate("planets", ["id", "name"]);
}
filmSchema.statics.insert = async function(film) {
  return await this.create(film)
}
module.exports = mongoose.model("Film", filmSchema);