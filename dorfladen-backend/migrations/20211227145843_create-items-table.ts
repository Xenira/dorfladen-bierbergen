import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('category', function (table) {
		table.uuid('id').primary();
		table.string('title').notNullable();
		table.string('icon').notNullable();
		table.timestamps(false, true);
		table.unique(['id']);
	}).createTable('item', function (table) {
		table.uuid('id').primary();
		table.uuid('category').notNullable();
		table.string('description').notNullable();
		table.integer('price').notNullable();
		table.timestamps(false, true);
		table.unique(['id']);
		table.foreign('category').references('id').inTable('category');
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('item').dropTable('category');
}

