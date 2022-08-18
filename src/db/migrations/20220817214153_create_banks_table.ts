import { Knex } from 'knex';

export async function up( knex: Knex ): Promise<void> {
    return knex.schema.createTable( 'banks', ( table ) => {
        table.uuid( 'id' ).primary();
        table.string( 'name', 30 ).notNullable().unique();
        table.string( 'description', 100 );
        table.string( 'owner', 30 ).notNullable();
        table.string( 'manager', 30 ).notNullable();
        table.integer( 'numberOfWorkers' ).defaultTo( 1 );
        table.string( 'country', 30 ).defaultTo( 'Nigeria' );
        table.string( 'address', 50 ).notNullable();
        table.string( 'password', 50 ).notNullable();
    } );
}

export async function down( knex: Knex ): Promise<void> {
    return knex.schema.dropTable( 'banks' );
}
