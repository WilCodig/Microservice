const {ClientError}= require ("../utils/errors")
module.exports = (req, res, next) => {
    // const {name} = req.body;
    // if (name) return next();
    // else throw new ClientError ("Error en el nombre", 401); //else throw Error ("Falta el nombre del personaje");
    
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        homeworld,
        films,
      } = req.body;
      switch (req.body) {
        case !name:
          throw new ClientError("Debe tener un name", 401);
        case !height:
          throw new ClientError("Debe tener un height", 401);
        case !mass:
          throw new ClientError("Debe tener un mass", 401);
        case !hair_color:
          throw new ClientError("Debe tener un hair_color", 401);
        case !skin_color:
          throw new ClientError("Debe tener un skin_color", 401);
        case !eye_color:
          throw new ClientError("Debe tener un eye_color", 401);
        case !birth_year:
          throw new ClientError("Debe tener un birth_year", 401);
        case !gender:
          throw new ClientError("Debe tener un gender", 401);
        case !homeworld:
          throw new ClientError("Debe tener un homeworld", 401);
        case !films:
          throw new ClientError("Debe tener un films", 401);
        default:
          break;
      }
      next();

};