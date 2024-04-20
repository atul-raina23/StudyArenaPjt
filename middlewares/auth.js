/*const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");



exports.auth = async (req, res, next) => {
    try {
        // Extract token from request headers
        const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");

        // Check if token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, processa.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Error in authentication middleware:", error);
        return res.status(401).json({
            success: false,
            message: 'Token is invalid',
        });
    }
};


//isStudent
exports.isStudent = async (req, res, next) => {
 try{
        if(req.user.accountType !== "Student") {
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Students only',
            });
        }
        next();
 }
 catch(error) {
    return res.status(500).json({
        success:false,
        message:'User role cannot be verified, please try again'
    })
 }
}


//isInstructor
exports.isInstructor = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Instructor") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Instructor only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }


//isAdmin
exports.isAdmin = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Admin") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Admin only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }*/
   const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables from a.env file
const User = require("../models/User");

// Middleware for authentication

exports.auth = async (req, res, next) => {
    try {
        // Extract token from request headers
        const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");

        // Check if token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        // Verify the token using the updated secret key
        const decoded = jwt.verify(token, processa.env.JWT_SECRET); // Use the updated secret key
        req.user = decoded;
        console.log();
        next();
    } catch (error) {
        console.error("Error in authentication middleware:", error);
        return res.status(401).json({
            success: false,
            message: 'Token is invalid',
        });
    }
};

// Middleware for checking if user is a student
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Students only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
};

// Middleware for checking if user is an instructor
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Instructors only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
};

// Middleware for checking if user is an admin
exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Admins only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
};
