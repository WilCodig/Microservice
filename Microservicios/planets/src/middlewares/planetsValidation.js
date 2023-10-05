const ClientError = require("../utils/errors");

module.exports = (req, res, next) => {
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
  switch (req.body) {
    case !name:
      throw new ClientError("Error en el name,", 401);
    case !rotation_period:
      throw new ClientError("Error en el rotation_period", 401);
    case !orbital_period:
      throw new ClientError("Error en el orbital_period", 401);
    case !diameter:
      throw new ClientError("Error en el diameter", 401);
    case !climate:
      throw new ClientError("Error en el climate", 401);
    case !gravity:
      throw new ClientError("Error en el gravity", 401);
    case !terrain:
      throw new ClientError("Error en el terrain", 401);
    case !surface_water:
      throw new ClientError("Error en el surface_water", 401);
    case !residents:
      throw new ClientError("Error en el residents", 401);
    case !films:
      throw new ClientError("Error en el films", 401);
    default:
      break;
  }
  next();
};