const ClientError = require("../utils/errors");

module.exports = (req, res, next) => {
  const {
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
  } = req.body;
  switch (req.body) {
    case !title: throw new ClientError("Error en el titulo", 401);
    case !opening_crawl: throw new ClientError("Error en el opening_crawl", 401);
    case !director: throw new ClientError("Error en el director", 401);
    case !producer: throw new ClientError("Error en el producer", 401);
    case !release_date: throw new ClientError("Error en el release_date", 401);
    case !characters: throw new ClientError("Error en el characters", 401);
    case !planets: throw new ClientError("Error en el planets", 401);
    default:
        break;
  }
 next();
};