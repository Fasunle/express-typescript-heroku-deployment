import express from 'express';
import { config } from 'dotenv';


const app = express();
config();

const PORT = process.env.PORT || 5000;

app.get( '/', ( req, res ) => {
    return res.status( 200 ).send( "Hello World from NodeJS APP" );
} );

( () => {
    app.listen( PORT, () => console.log( "Hello world\n" + " " ) )
} )();
