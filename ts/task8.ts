type User = {
    name: string;
    email: string;
}

type Admin = {
    adminLevel : number;
}

type AdminUser = User & Admin;

function describeAdmin ( user: AdminUser ): string
{
    return `${ user.name } (${ user.email }) is an admin with level ${ user.adminLevel }.`;
}

const admin: AdminUser = {
  name: "Ashraful",
  email: "ashraful@example.com",
  adminLevel: 1000
};

console.log( describeAdmin( admin ) );