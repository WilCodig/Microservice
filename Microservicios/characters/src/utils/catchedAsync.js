//funciones de orden superior
module.exports = (controllerFunction) =>{ //= (fn) =>{
    return function (req, res, next){
        controllerFunction(req, res).catch((err) =>{ //capuramos el error y lo enviamos
            next(err);
        });
    };
};