// netlify/functions/api.js
const serverless = require('serverless-http');
const { app } = require('../../server.js'); // Importiert Ihre bestehende server.js

module.exports.handler = serverless(app);