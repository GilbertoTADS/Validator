export function Factory(Class:any){
    const factory = new Class();
    return factory.factoryMethod();
}