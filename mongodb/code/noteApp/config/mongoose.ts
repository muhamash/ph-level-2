import mongoose from "mongoose";

async function mongooseConnect ()
{
    try {
        await mongoose.connect( 'mongodb+srv://expressMongo:psFDgctbQYcSy4Kx@atlascluster.cusoal9.mongodb.net/advanced-note-app?retryWrites=true&w=majority&appName=AtlasCluster' );
        
        console.log( "Connected to MongoDB Using Mongoose!!" );
    }
    catch ( error )
    {
        console.log(error)
    }
}

export default mongooseConnect;