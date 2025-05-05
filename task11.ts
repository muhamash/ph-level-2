function processData ( data: unknown ): unknown
{
    if (typeof data === 'string' )
    {
        return data.toUpperCase();
    }
    else if(typeof data === 'number' ){
        return data * data
    }
    else {
        return `unknown type : ${ JSON.stringify(data) }`;
    }
}

const string = processData( 'hello' );
const number = processData( 4 );
const unknown = processData( { name: 'hello' } );

console.log( string, number, unknown );