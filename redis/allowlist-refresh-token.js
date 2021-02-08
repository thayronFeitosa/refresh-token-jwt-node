const redis = require('redis');
const manipulaLita = require('./manipula-list');
const allowlist = redis.createClient({prefix: 'allowlist-refresh-token.js'});

module.exports = manipulaLita(allowlist);