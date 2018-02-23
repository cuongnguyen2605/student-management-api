const Promise = require('bluebird');

class StudentRepos {

    constructor(mysqlConnect) {
        this.mysqlConnect       = mysqlConnect;
        // this.mysqlConnect.query = Promise.promisify(mysqlConnect.query);
    }

    create(data) {
        console.log(data);
        // let query = 'INSERT INTO tableName VALUES (?)';
        // return this.mysqlConnect.query(query, [data]);
    }

    findAll() {

    }

}

module.exports = StudentRepos;
