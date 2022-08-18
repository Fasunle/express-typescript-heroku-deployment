import { Knex } from 'knex';

export async function up( knex: Knex ): Promise<void> {
    return knex.schema.createTable( 'banks', ( table ) => {
        table.uuid( 'id' ).primary();
        table.string( 'name', 256 ).notNullable().unique();
        table.string( 'description', 256 );
        table.string( 'owner', 256 ).notNullable();
        table.string( 'manager', 256 ).notNullable();
        table.integer( 'numberOfWorkers' ).defaultTo( 1 );
        table.string( 'country', 256 ).defaultTo( 'Nigeria' );
        table.string( 'address', 256 ).notNullable();
        table.string( 'password', 256 ).notNullable();
    } );
}

export async function down( knex: Knex ): Promise<void> {
    return knex.schema.dropTable( 'banks' );
}
