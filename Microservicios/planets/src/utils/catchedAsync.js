module.exports = (controllerFunction) => {
    return function (req, res, next) {
      controllerFunction(req, res).catch((err) => {
        next(err);
      });
    };
};