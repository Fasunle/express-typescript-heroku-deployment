import express from 'express';
import { config } from 'dotenv';
import knex from './db/connectdb';

const app = express();
config();

const PORT = process.env.PORT || 5000;

app.get( '/', ( req, res ) => {
    return res.status( 200 ).send( "Hello World from NodeJS APP" );
} );

app.get( '/bank', async ( req, res ) => {

    const banks = await knex.select( '*' ).from( 'banks' );

    res.json( banks );
} );

( () => {
    app.listen( PORT, () => console.log( "Hello world\n" + " " ) )
} )();
