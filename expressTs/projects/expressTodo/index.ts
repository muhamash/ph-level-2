import app from './app/app';
import { client } from './config/mongo';

const port = 3000;

const bootstrap = async () =>
{
    try
    {
        await client.connect();
        console.log( "✅ Connected to MongoDB Atlas" );
      
        // const db = await client.db( "todosDB" )
        // console.log(db)
        // const collection = await db.collection( "todos" ).insertOne( {
        //     title: 'mongo',
        //     description: 'mongodb'
        // })
        // console.log(collection)

        app.listen( port, () =>
        {
            console.log( `🌎 Server running at http://localhost:${ port }` );
        } );
    } catch ( error )
    {
        console.error( "❌ Failed to connect to MongoDB:", error );
        process.exit( 1 );
    }
};

bootstrap();