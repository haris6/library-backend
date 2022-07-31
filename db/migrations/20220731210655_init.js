/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex,Promise) {
    return knex.schema.createTable('books',table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('author').notNullable();
        table.integer('borrowed_by').references('id').inTable('students');
        table.date('date_of_borrow');
        table.date('expected_date_of_return');
        table.timestamps(true,true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('books');
};
