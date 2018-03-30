const knex = require('knex')({
    client: 'mysql',
    connection: {
        localhost: 'localhost',
        user     : 'root',
        password : '1',
        database : 'student'
    }
});

module.exports = knex;
