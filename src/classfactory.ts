function classDecorator2(name: string) {
    debugger
    return function dd<T extends {new(...args:any[]):{}}>(constructor:T) {
        return class extends constructor {
            debugger
            newProperty = "new property";
            hello = "override";
        }
    }
}

@classDecorator2('name')
class Greeter3 {
    property = "property";
    hello: string;
    constructor(m: string) {
        debugger
        this.hello = m;
    }
}

console.log(new Greeter3("world"));