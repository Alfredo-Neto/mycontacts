const usersController = require('../controller/UsersController')

const routes = [
    {
        url: "/users",
        method: "GET",
        handler: usersController.listUsers
    }
]

module.exports = routes;