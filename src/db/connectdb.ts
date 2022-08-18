import { knex } from 'knex';

import knexfile from '../knexfile';

const ENVIRONMENT: string = process.env.NODE_ENV || 'development';
let config = {};

if ( ENVIRONMENT === 'production' ) {
    config = knexfile.production;
} else if ( ENVIRONMENT === 'staging' ) {
    config = knexfile.staging;
} else {
    config = knexfile.development;
}

console.log( ENVIRONMENT );

export default knex( config );
