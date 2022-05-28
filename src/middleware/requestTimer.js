module.exports = function (req, res, next) {
    req.reqTime = new Date().getTime();
    next();
}