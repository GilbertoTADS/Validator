import { Factory } from '../../src';
import { DateValidator } from './../../src/Date';

let date:DateValidator;

beforeAll(() => {
    date = Factory(DateValidator);
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
        const res2:boolean = date.isDate(' /  /    ');
        const res3:boolean = date.isDate('../../....');
        const res4:boolean = date.isDate('@@/@@/@@@@');
        const res5:boolean = date.isDate('d6vf5/d8fgws)-3/w7+w09fg0r9g');
        expect(false).toBe(res);
        expect(false).toBe(res2);
        expect(false).toBe(res3);
        expect(false).toBe(res4);
        expect(false).toBe(res5);
    })
    test('Must return currency date', () => {
        const dateSpy = new Date();
        const day = dateSpy.getDate().toString().padStart(2,'0');
        const year = dateSpy.getFullYear().toString().padStart(2,'0');
        const month = (dateSpy.getMonth()+1).toString().padStart(2,'0');
        const today = date.currencyDate();
        expect(`${year}-${month}-${day}`).toBe(today);
    })


})
