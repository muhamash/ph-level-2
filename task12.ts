function handleError ( message: string ): never
{
    throw new Error( message );
}

const msz = handleError( 'this is an error throw!!' );

console.log( msz );