module.exports = (res, status, data) => {
    res.status(status).json({
        success:true,
        error:false,
        data,
    })
};