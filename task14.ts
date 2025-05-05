type User = {
    [ key: string ]: string | number | undefined | null | boolean;
};

const userData: User[] = [
    { name: 'userOne', age: 10 },
    { name: 'userTwo', age: 10 },
    { name: 'userTwo', age: 10, status: false }
];

// console.log(userData)

async function fetchData ( ): Promise<User[]>
{

    const userData: User[] = [
        { name: 'userOne', age: 10 },
        { name: 'userTwo', age: 10 },
        { name: 'userTwo', age: 10, status: false }
    ];

    return new Promise( ( resolve ) =>
    {
        setTimeout( () =>
        {
            resolve(userData)
        }, 1000)
    } );
}

( async function displayUser ()
{
    const users = await fetchData();
    console.log( users );
} )();