declare function classDecorator2(name: string): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {
        debugger: any;
        newProperty: string;
        hello: string;
    };
} & T;
declare class Greeter3 {
    property: string;
    hello: string;
    constructor(m: string);
}
