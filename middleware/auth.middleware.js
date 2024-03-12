const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
            jwt.verify(token, process.env.AUTH_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                req.user = user;
                console.log(user)
                next();
            });
        } else {
            console.log('No Token Found')
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    authenticateJWT
}
