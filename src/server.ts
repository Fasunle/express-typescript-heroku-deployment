import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get( '/', ( req, res ) => {
    return res.status( 200 ).send( "Hello World from NodeJS APP" );
} );

( () => {
    app.listen( PORT, () => console.log( "Hello world" ) )
} )();
