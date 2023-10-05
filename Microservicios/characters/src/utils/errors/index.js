class ClientError extends Error {
    constructor(message,status = 400){
        super(message); //super llama a error
        this.status= statusCode;
    }
};

module.exports = {ClientError};