declare class Greeter2 {
    greeting: string;
    constructor(message: string);
    greet(): string;
}
declare function enumerable(value: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
