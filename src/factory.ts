export function Factory(Class:any){
    console.log(typeof Class)
    const factory:typeof Class = new Class();
    console.log('object -> ',factory , 'Class ->', Class);
    return factory.factoryMethod();
}