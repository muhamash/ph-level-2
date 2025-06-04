// type Address = {
//     city?: string;
//     zip?: number;
// }

// type Employee = {
//     name: string;
//     address?: Address;
// }

interface Address
{
    city?: string;
    zip?: number;
}

interface Employee extends Partial<{ address: Address }>
{
    name: string;
}

// interface Employee extends Partial<{ address: Address }> {
//   name: string;
// }

function getEmployeeCity ( employee: Employee ): string
{
    return employee?.address?.city ?? "City not available";
}

const employee1: Employee = {
  name: "Ashraful",
  address: {
    city: "Dhaka",
    zip: 1207
  }
};

const employee2: Employee = {
  name: "Rahim"
};

console.log(getEmployeeCity(employee1)); 
console.log(getEmployeeCity(employee2));
