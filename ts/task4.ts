interface Book
{
    name: string;
    author: string;
    page: number;
}

interface Magazine {
    name: string;
    publisher: string;
    price: number;
}

type BookOrMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;

const item1:BookOrMagazine = {
    name: 'name',
    author: 'lekhok',
    // publisher: 'publisher',
    page: 20
}

const item2: BookAndMagazine = {
    name: "Science Special Edition",
    author: "Dr. Jane Doe",
    page: 100,
    publisher: "National Science Group",
    price: 12,
};

console.log( item1, item2 );