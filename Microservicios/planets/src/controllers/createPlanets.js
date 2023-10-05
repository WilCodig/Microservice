const planets = require("../data");
const { response } = require("../utils");


module.exports = async (req, res) => {

    const {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        residents,
        films,
      } = req.body;

  const newPlanet = await planets.create({  
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    residents,
    films,
  });
  // const newFilm = await films.create();
    response(res, 201, newPlanet);
};