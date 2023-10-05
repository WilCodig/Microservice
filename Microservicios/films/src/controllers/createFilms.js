const films = require("../data");
const { response } = require("../utils");
// const axios = require("axios");

module.exports = async (req, res) => {

  const { 
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets, } = req.body

  const newFilm = await films.create({  
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
  });

    response(res, 201, newFilm);
};