const { verify } = require('jsonwebtoken');

module.exports = (req, _, next) => {
    try {
        const authHeader = req.get('Authorization');
        if (!authHeader) throw new Error()
        const token = authHeader.split(' ')[1];
        const decodedToken = verify(token, process.env.SECRETE);
        req.user = decodedToken;
        next();
    }
    catch (e) {
        const err = new Error();
        err.code = 401;
        err.message = 'Invalid Credential';
        next(err)

    }
}