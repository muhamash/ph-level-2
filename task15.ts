function isString ( value: unknown ): value is string
{
    return typeof value === 'string';
}

( function printUpperCase ( value: unknown ): void
{
    isString( value ) ? console.log( value.toUpperCase() ) : console.log( `is not string` );
    
} )("a");