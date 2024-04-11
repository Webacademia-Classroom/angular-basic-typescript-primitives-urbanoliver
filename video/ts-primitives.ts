
class PrimitiveTypes {
    quantity: number = 10;

    color: number = 0xffffff;

    id: number = 0o777;

    userRole: number = 0b111000;
    
    isActive: boolean = false;

    appName: string = 'MyGoodTsApp';

    report: string = `${this.appName} handles more than ${this.quantity} users.`;
}