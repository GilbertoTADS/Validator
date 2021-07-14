import { FactoryDateValidator, DateValidator } from '../../src/Date';

let date:DateValidator;

beforeAll(() => {
    date = new FactoryDateValidator().factoryMethod();
})
describe('Class DateValidator', () => {
    test('Should return true if data is not a date', () => {
        const res:boolean = date!.isDate('2020-01-01');
        expect(true).toBe(res);
    })
    test('Should return false if data is not a date', () => {
        const res:boolean = date!.isDate('2020-01');
        expect(false).toBe(res);
    })
    test('Must return false if parts are not numbers', () => {
        const res:boolean = date.isDate('dd/mm/aaaa');
        expect(false).toBe(res);
    })


})
