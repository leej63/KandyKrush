const controller = require("./controller")

module.exports = function(app){
    app.get("/api/cakes", controller.Home)
}