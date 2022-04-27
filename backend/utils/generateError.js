const generateError = (message = '', code = 500) => {
    const error = new Error();
    error.message = message
    error.code = code;
    throw error;
}

module.exports = generateError;