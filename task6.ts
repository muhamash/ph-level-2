( function sum ( ...numbers: number[] ): void
{
    const sum = numbers.reduce( ( total, numb ) => total + numb, 0 );
    console.log( sum );
} )( 1, 2, 3, 4 );