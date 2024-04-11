export default class calculator {
    // Example for defining an Array of Objects.
    bills: {id: number}[] = [
        {id: 1},
        {id: 2},
    ];

    // Define the following variable based on the comments, with the appropriate type-annotation!
    /** 
     * @type {Array} points - Array of numbers, from 1 to 10, step size is 1
     * @test npm run test-col:01
    */
    points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * Each Array elements will be an Object, that is a user.
     * Mandatory items of the users: name<string>, email<string>.
     * Initialize the Array, it will has minimum 2 elements.
     * @type {Array} users - Array of Users.
     * @test npm run test-col:02
     */
    users: {name: string, email: string}[] = [
        { name: 'Jack', email: 'jack@jack.com' },
        { name: 'Bill', email: 'bill@bill.com' },
    ];
    
    /** 
     * Each Array elements will be an Object, that is a product.
     * Mandatory items of the products: name<string>, price<number>, stock<number>.
     * Optional items: active<boolean>.
     * Initialize the Array, it will has minimum 2 elements.
     * @type {Array} products - Array of Products.
     * @test npm run test-col:03
     */    
    products: {name: string, price: number, stock: number, active?: boolean}[] = [
        {name: 'Iron', price: 200, stock: 7, active: true},
        {name: 'Iron', price: 200, stock: 7},
    ];
    
    /** 
     * Initialize a Tuple, with the following types. The values are not relevant.
     * @type {Tuple} role - number, string, boolean. 
     * @test npm run test-col:04
     */
    role: [number, string, boolean] = [1, 'hopp', false];

}
