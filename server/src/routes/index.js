const healthRoute = require('./health.routers')
const errorHandler = require('../controller/errorHandler')


module.exports = function initRoute(app){
    app.use(healthRoute)
     app.use(function(req, res, next){
        let error = new Error("Page not found")
        error.status = 404
        next(error)
    })
    app.use(errorHandler)
}