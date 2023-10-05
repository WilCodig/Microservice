module.exports= (res, statusCode, data)=>{
    res.status(statusCode).json ({
        success:true,
        error: false,
        data,  //data: data
        
    })
}