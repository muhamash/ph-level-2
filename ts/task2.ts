function taskTwo ( name: string, age: number, role?: 'admin' | 'user' | 'guest' ) {
    return role ? console.log( `Name: ${ name }; age: ${ age }, role:${ role }` ) : console.log( `Name: ${ name }; age: ${ age }, role: not specified` );
}

taskTwo( 'ami', 30 );
taskTwo( 'ash', 23, 'admin' );