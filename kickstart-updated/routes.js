const routes = require('next-routes')(); // notice the function call


routes
.add('/campaigns/new', '/campaigns/new')
.add('/campaigns/:address', '/campaigns/show') // notice the :address variable
//first argument is the route, second is the page to show
.add('/campaigns/:address/requests', '/campaigns/requests/index')
.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;