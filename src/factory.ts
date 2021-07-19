export function Factory(Class:any){
    const factory:typeof Class = new Class();
    return factory.factoryMethod();
}