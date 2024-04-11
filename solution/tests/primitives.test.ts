import C from "../practice-ts-primitives";
const fs = require("fs");
import 'jest';

const getFileContent = (path: string): string => {
  const fileContent = fs.readFileSync(path, "utf8");
  return fileContent;
};

interface IIndexable {
  [key: string]: any;
}

const testC: IIndexable = new C();

describe('memberTest', function () {
    it('@type {number} members - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /members *\: *number/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {number} members - value: 11', function () {
        const exists = testC['members'];
        const result = exists && testC['members'] === 11;

        expect(result).toEqual(true);
    });
});

describe('baseColorTest', function () {
    it('@type {number} baseColor - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /baseColor *\: *number/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {number} baseColor - value: a3f4d5 (hexadecimal number)', function () {
        const exists = testC['baseColor'];
        const result = exists && testC['baseColor'] === 0xa3f4d5;
        expect(result).toEqual(true);
    });
});

describe('roleTest', function () {
    it('@type {number} role - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /role *\: *number/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {number} role - value: 1001 (binary number)', function () {
        const exists = testC['role'];
        const result = exists && testC['role'] === 0b1001;
        expect(result).toEqual(true);
    });
});

describe('systemIDTest', function () {
    it('@type {number} systemID - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /systemID *\: *number/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {number} systemID - value: 7700 (octal number)', function () {
        const exists = testC['systemID'];
        const result = exists && testC['systemID'] === 0o7700;
        expect(result).toEqual(true);
    });
});

describe('averageTest', function () {
    it('@type {number} average - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /average *\: *number/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {number} average - value: 4.5', function () {
        const exists = testC['average'];
        const result = exists && testC['average'] === 4.5;
        expect(result).toEqual(true);
    });
});

describe('adminNameTest', function () {
    it('@type {number} adminName - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /adminName *\: *string/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {string} adminName - value: any text', function () {
        const exists = testC['adminName'];
        const result = exists && typeof testC['adminName'] === `string`;
        expect(result).toEqual(true);
    });
});

describe('sumPointsTest', function () {
    it('@type {number} sumPoints - type annotation', function () {
        const fileContent = getFileContent('./practice-ts-primitives.ts');
        const annotation = /sumPoints *\: *string/gm.test(fileContent);

        expect(annotation).toEqual(true);
    });

    it('@type {string} sumPoints - value: Members have <this.members multiply by this.average> points (template string)', function () {
        const exists = testC['sumPoints'];
        const value = testC['members'] * testC['average'];
        const result = exists
            && new RegExp('Members[ ]*have[ ]*' + value).test(testC['sumPoints']);
        expect(result).toEqual(true);
    });
});
