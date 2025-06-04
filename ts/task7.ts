function typeAssertionAndNarrowing ( params: string | number ): number
{
    if ( typeof params === 'string' )
    {
        return params.length;
    } else
    {
        return params * params;
    }
}

const string = typeAssertionAndNarrowing( 'hello' );
const number = typeAssertionAndNarrowing( 4 );

console.log( string, number );