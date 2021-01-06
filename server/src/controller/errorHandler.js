function errorHandler (error, req, res, next){
    return res.status(error.status||505).json({
        message: error.message || 'something went wrong'
    })
}

module.exports = errorHandler;