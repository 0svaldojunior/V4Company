const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { tag } = request.query;
        const tools = await connection('tools').where('tag', 'like', `%${tag}%`)
        
        return response.json(tools);
    }
};