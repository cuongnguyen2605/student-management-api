
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('students', function (table) {
        table.increments();
        table.string('full_name');
        table.date('date_of_birth');
        table.string('address');
        table.string('position');
        table.string('department');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students');
};
