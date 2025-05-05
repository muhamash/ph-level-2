( function getDisplayName ( name: string | null | undefined ): void
{
    // console.log( name ?? "Anonymous" );
    const check = name?.trim() ? name : "Anonymous";
    console.log( check );
})('')

// (function getDisplayName(name: string | null | undefined): void {
//   const check = name?.trim() ? name : "Anonymous";
//   console.log(check);
// })('');

