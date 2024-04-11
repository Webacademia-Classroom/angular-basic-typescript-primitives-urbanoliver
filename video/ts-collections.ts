
interface User {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
    stock?: number;
}

class Shop {
    
    numbers: number[] = [1, 2, 3];

    users: User[] = [
        {name: 'Bob', age: 44},
        {name: 'Jack', age: 22}
    ];

    products: Product[] = [
        {name: 'Iron', price: 333},
    ];

    sort: [number, boolean] = [1, true];

    constructor() {
        this.sort = [4, false];
    }
}
