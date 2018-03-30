class StudentRepos {

    constructor(knex) {
        this.knex = knex;
    }

    create(params) {
        return this.knex('students').insert(params);
    }

    findAll() {
        return this.knex('students').select();
    }

    findOne(id) {
        return this.knex('students')
            .select()
            .where('id', id)
        ;
    }

    edit(id, params) {
        return this.knex('students')
            .update(params)
            .where('id', id)
        ;
    }

    delete(id) {
        return this.knex('students')
            .delete()
            .where('id', id)
        ;
    }

}

module.exports = StudentRepos;
