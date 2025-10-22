class CustomError extends Error {
    constructor(message, errorCode, details) {
        super(message);
        this.name = 'CustomError';
        this.errorCode = errorCode;
        this.details = details;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            errorCode: this.errorCode,
            details: this.details            
        };
    }
}

module.exports = CustomError;