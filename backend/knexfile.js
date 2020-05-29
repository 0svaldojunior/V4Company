// Configurações do banco de dados
module.exports = {
    database: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '0svaldoJR..',
            database: 'v4company',
        },
        migrations: {
            directory: 'src/database/migrations',
        },
    },
};