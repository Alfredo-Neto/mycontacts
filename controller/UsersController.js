const users = require('../model/users')

module.exports.listUsers = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
}