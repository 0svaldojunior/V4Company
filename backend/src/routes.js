const { Router } = require('express');

const ToolController = require('./controllers/ToolController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.create);
routes.delete('/tools', ToolController.delete);
routes.get('/tools/search', SearchController.index);

module.exports = routes;
