( function reverseString ( word: string ):void
{
    const reversed = word.split('').reverse().join('');
    console.log( reversed );

} )( 'hello' );