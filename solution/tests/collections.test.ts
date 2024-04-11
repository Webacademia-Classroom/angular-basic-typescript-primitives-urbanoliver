import C from '../practice-ts-collections';
const fs = require("fs");
import 'jest';

const getFileContent = (path: string): string => {
    const fileContent = fs.readFileSync(path, 'utf8');
    return fileContent;
};

interface IIndexable {
    [key: string]: any;
}

const testC: IIndexable = new C();

describe('NumberArrayTest', function () {
    it('@type {Array} points - right type-annotation', function () {
        const fileContent = getFileContent('./practice-ts-collections.ts');
        const annotation = /points *\: *number *\[ *\]/gm.test(fileContent);
        
        expect(annotation).toEqual(true);
    });

    it('@type {Array} points - számok tömbje', function () {
        const exists = testC['points'];
        const isArray = Array.isArray(testC['points']);
        let isNumArray: boolean = true;

        if (exists && isArray) {
            for (let item of testC['points']) {
                if (typeof item !== 'number') {
                    isNumArray = false;
                    break;
                }
            }
        }

        expect(exists && isArray && isNumArray).toEqual(true);
    });
});
describe('UserArrayTest', function () {
    it('@type {Array} points - right type-annotation', function () {
        const fileContent = getFileContent('./practice-ts-collections.ts');
        const annotation = /users *\: *{ *name *: *string *, *email *: *string *} *\[ *\]/gm.test(fileContent);
        const annotation2 = /users *\: *{ *email *: *string *, *name *: *string *} *\[ *\]/gm.test(fileContent);
        
        expect(annotation || annotation2).toEqual(true);
    });

    it('@type {Array} users - minden elem egy felhasználó', function () {
        const exists = testC['users'];
        let right = true;
        if (exists) {
            testC['users'].forEach((item: {name: string, email: string}) => {
                if (
                    (typeof item.name !== 'string' || typeof item.email !== 'string')
                    &&
                    right
                ) {
                    right = false;
                }
            });
        }
        expect(exists && right).toEqual(true);
    });
});
describe('ProductArrayTest', function () {
    it('@type {Array} products - right type-annotation', function () {
        // {name: string, price: number, stock: number, active?: boolean}
        const fileContent = getFileContent('./practice-ts-collections.ts');
        const re = /products *\: *(?=.*price *\: *number.*)(?=.*name *\: *string.*)(?=.*stock *\: *number.*)(?=.*active\? *\: *boolean.*).+/gm;
        
        expect(re.test(fileContent)).toEqual(true);
    });
    
    it('@type {Array} products - minden elem egy termék', function () {
        // {name: string, price: number, stock: number, active?: boolean}
        const exists = testC['products'];
        let right = true;
        if (exists) {
            testC['products'].forEach((item: {name: string, price: number, stock: number}) => {
                if (
                    (
                        typeof item.name !== 'string'
                        || typeof item.price !== 'number'
                        || typeof item.stock !== 'number'
                    )
                    &&
                    right
                ) {
                    right = false;
                }
            });
        }
        expect(exists && right).toEqual(true);
    });
});
describe('RoleTupleTest', function () {
    it('@type {Tuple} role - right type-annotation', function () {
        // role: [number, string, boolean]
        const fileContent = getFileContent('./practice-ts-collections.ts');
        const re = /role *: *\[ *number *, *string *, *boolean *\]/gm;
        
        expect(re.test(fileContent)).toEqual(true);
    });
    
    it('@type {Tuple} role - number, string, boolean', function () {
        const exists = testC['role'];
        let right = true;
        if (exists) {
            if (
                typeof testC['role'][0] !== 'number'
                || typeof testC['role'][1] !== 'string'
                || typeof testC['role'][2] !== 'boolean'
            ) {
                right = false;
            }
        }
        expect(exists && right).toEqual(true);
    });
});