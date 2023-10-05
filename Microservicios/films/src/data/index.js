const axios = require("axios");

module.exports = {
    list: async() => {
        const films = await axios.get("http://database_:8004/Film");
        // const films = await axios.get("http://localhost:8004/Film");
       return films.data
     },
  create: async ({
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
  }) => {
    // throw Error("Error en el modelo al crear el film")
    const newFilm = {
      title,
      opening_crawl,
      director,
      producer,
      release_date,
      characters,
      planets,
    };
    return newFilm;
  },
};