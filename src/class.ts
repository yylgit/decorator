function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        debugger
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        debugger
        this.hello = m;
    }
}

console.log(new Greeter("world"));