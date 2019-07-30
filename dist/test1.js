// import {Container, ScopeEnum, scope, provide} from 'injection';
// // 内部代码
// const container = new Container(); 
// @scope(ScopeEnum.Prototype)
// @provide('petrol')
// export class PetrolEngine {
//   capacity = 10;
// }
// in IoC Container
// assert(container.getAsync('petrol') === container.getAsync('petrol'))  // false
// assert(container.getAsync('diesel') === container.getAsync('diesel'))  // true
