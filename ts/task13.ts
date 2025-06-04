// generic types

function removeDuplicates<T> ( arr: T[] ): T[]
{
    return Array.from( new Set( arr ) );
}

const nums = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);       
const words = removeDuplicates(['apple', 'banana', 'apple']); 
const bools = removeDuplicates([true, false, true]);       

console.log(nums);
console.log(words);
console.log(bools);