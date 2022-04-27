const jwt = require('jsonwebtoken');

const signInHandler = user => {
    const { password, ...signedUser } = user;
    const expiresIn = new Date().getTime() + 3600000;
    const token = jwt.sign({ ...signedUser }, process.env.SECRETE, { expiresIn: "1h" });
    return { token, expiresIn, ...signedUser };
}

module.exports = signInHandler;