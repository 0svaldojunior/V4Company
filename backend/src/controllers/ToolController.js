const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const tools = await connection('tools').select('*');

        return response.json(tools);
    },

    async create(request, response) {
        const { name, link, description, tag } = request.body;

        const tool = await connection('tools').insert({
            name,
            link,
            description,
            tag,
        });

        return response.json({ tool })
    },

    async delete(request, response) {
        const { tool_id } = request.query;
        // const tool_id = request.headers.authorization;

        const tool = await connection('tools')
            .where('tool_id', tool_id)
            .select('*')
            .first();
        
        if(tool.tool_id != tool_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        const deleteTool = await connection('tools').where('tool_id', tool_id).del();

        return response.status(204).send().json(deleteTool);
    },
};