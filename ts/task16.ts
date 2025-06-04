function utilityType<T, K extends keyof T> ( obj: T, key: K ): T[ K ]
{
    return obj[ key ];
}

const user = {
  name: "Ashraful",
  age: 25,
  active: true
}
const userName = utilityType(user, "name");  
const userAge = utilityType(user, "age");   
const userStatus = utilityType(user, "active"); 

console.log(userName);  
console.log(userAge);  
console.log(userStatus); 