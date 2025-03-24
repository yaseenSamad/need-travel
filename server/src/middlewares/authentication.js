
require('dotenv').config();

const authWeb = (req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);

    if (!req.headers['authtoken'] || req.headers['authtoken'] !== process.env.secretkey) {
        return res.status(403).json({ error: 'Forbidden: Invalid API key', success: false , message: 'Forbidden: Invalid API key' });
    }

    next()
}

module.exports = authWeb
