import { Factory,DateValidator, Response } from '../../src';

let date:DateValidator;
beforeAll(() => {
    date = Factory(DateValidator);
})
function dateCurrency(){
    const date = new Date();
    const day = date.getDate().toString().padStart(2,'0');
    const year = date.getFullYear().toString().padStart(2,'0');
    const month = (date.getMonth()+1).toString().padStart(2,'0');
    return `${year}-${month}-${day}`;
}
describe('Class DateValidator', () => {
    test('Should return true if data is not a date', () => {
        const res:Response|boolean = date.isDate('2020-01-01');
        expect(true).toBe(res);
    })
    test.only('Should return false if data is not a date', () => {
        const res:Response|boolean = date!.isDate('2020-01');
        const res1:Response|boolean = date!.isDate('2020');
        const res2:Response|boolean = date.isDate(' '); 
        const res4:Response|boolean = date.isDate('');
        console.log('Is a date ->', (<Response>res4).success) 
        expect(false).toBe(res);
        expect(false).toBe(res1);
        expect(false).toBe(res2);
        expect(false).toBe((<Response>res4).success);
    })
    test('Must return false if parts are not numbers', () => {
        const res:Response|boolean = date.isDate('dd/mm/aaaa');
        const res2:Response|boolean = date.isDate(' /  /    ');
        const res3:Response|boolean = date.isDate('../../....');
        const res4:Response|boolean = date.isDate('@@/@@/@@@@');
        const res5:Response|boolean = date.isDate('d6vf5/d8fawns)-3/w7+w09fg0r9g');
        expect(false).toBe(res);
        expect(false).toBe(res2);
        expect(false).toBe(res3);
        expect(false).toBe(res4);
        expect(false).toBe(res5);
    })
    test('Must return currency date', () => {
        const todaySpy = date.currencyDate();
        const today = dateCurrency();
        expect(todaySpy).toBe(today);
    })
    test('Must return true if date is equal date today', () => {
        const today = dateCurrency();
        const isToday = date.isEqualToday(today);
        expect(true).toBe(isToday);
    })
    test('Must return false if date is not equal date today', () => {
        const anotherDate = '1996-09-02';
        const isToday = date.isEqualToday(anotherDate);
        expect(false).toBe(isToday);
    })
    test('Must return Response object if date is not a date', () => {
        const anotherDate = '';
        const response = date.isEqualToday(anotherDate);
        expect(true).toBe((<Response>response).error);
        expect(false).toBe((<Response>response).success);
        expect(anotherDate).toBe((<Response>response).data);
    })
    test('Must return true if date one is greater than date two', () => {
        const dateOne = '2021-02-02';
        const dateTwo = '2021-01-01';
        const res = date.isBigger(dateOne,dateTwo);
        expect(true).toBe(res);
    })
    test('Must return true if date one is greater than date two', () => {
        const dateOne = '2021-01-02';
        const dateTwo = '2021-02-01';
        const res = date.isBigger(dateOne,dateTwo);
        expect(false).toBe(res);
    })
    test('Must return Response class if date one is undefined', () => {
        const dateOne = '';
        const dateTwo = '2021-01-01';
        const res = date.isBigger(dateOne,dateTwo);
        expect(true).toBe((<Response>res).error);
        expect(false).toBe((<Response>res).success);
        expect('Param is required').toBe((<Response>res).message);
        expect(dateOne).toBe((<Response>res).data);
    })
    test('Must return true if date one is greater than date two', () => {
        const dateOne = '2021-01-01';
        const dateTwo = ' ';
        const res = date.isBigger(dateOne,dateTwo);
        expect(true).toBe((<Response>res).error);
        expect(false).toBe((<Response>res).success);
        expect('Param is required').toBe((<Response>res).message);
        expect(dateTwo).toBe((<Response>res).data);
    })
    test('Must return true if date one is less than date two', () => {
        const dateOne = '2019-01-01';
        const dateTwo = '2021-01-01';
        const res = date.isLess(dateOne,dateTwo);
        expect(true).toBe(res);
    })
    test('Must return false if date one is not less than date two', () => {
        const dateOne = '2021-01-01';
        const dateTwo = '2019-01-01';
        const res = date.isLess(dateOne,dateTwo);
        expect(false).toBe(res);
    })
})