const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        message: err.message || 'Hubo un error inesperado'
    })
}

module.exports = errorHandler