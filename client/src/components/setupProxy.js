const proxy = require("http-proxy-middleware");

module.exports = function(app) {

    app.use(proxy("/launches", { target: "https://api.spacexdata.com/v3/" }));

};