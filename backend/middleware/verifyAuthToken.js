/*const jwt = require("jsonwebtoken")
const verifyIsLoggedIn = (req, res, next) => {
    next()
    //return // to do:
    try {
        const token = req.cookies.access_token
        if(!token) {
            return res.status(403).send("A token is required for authentication")
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = decoded
            next()
        } catch(err) { 
            return res.status(401).send("Unauthorized. Invalid Token")
        }

    } catch(err) {
        next(err) 
    }
}

const verifyIsAdmin = (req, res, next) => {
    next()
    //return // to do:
    if(req.user && req.user.isAdmin) {
        next()
    } else {
        return res.status(401).send("Unauthorized. Admin required")
    }
}

module.exports = { verifyIsLoggedIn, verifyIsAdmin } */
const jwt = require("jsonwebtoken");

// Middleware to verify if the user is logged in
const verifyIsLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies.access_token;  // Assuming token is sent in cookies

        // Check if the token exists
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        } 

        // Verify the token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded;  // Attach user info from the decoded token to the request object
            next();  // Call next middleware or route handler
        } catch (err) {
            return res.status(401).send("Unauthorized. Invalid Token");
        }
 
    } catch (err) {
        next(err);  // Handle unexpected errors
    }
};

// Middleware to verify if the user is an admin
const verifyIsAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();  // Proceed if user is authenticated and is an admin
    } else {
        return res.status(401).send("Unauthorized. Admin required");
    }
};  

module.exports = { verifyIsLoggedIn, verifyIsAdmin };
 