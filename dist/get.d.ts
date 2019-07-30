declare class Point {
    private _x;
    private _y;
    constructor(x: number, y: number);
    readonly x: number;
    readonly y: number;
}
declare function configurable(value: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
