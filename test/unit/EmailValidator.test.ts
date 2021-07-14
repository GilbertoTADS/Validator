export class EmailValidator{
    constructor(){}
    public isEmail(email:string):boolean{
        return /[a-z]+\@[a-z]+\.[a-z]+/g.test(email);
    }
}
let email:EmailValidator;
beforeAll(() =>{
    email = new EmailValidator();
})
describe('Class EmailValidator', () => {
    test('Must return true if data is email', () => {
        expect(true).toBe(email.isEmail('valid_mail@gmail.com'));
        expect(true).toBe(email.isEmail('valid_mail@yahoo.com'));
    })
    test('Must return false if data is not email', () => {
        expect(false).toBe(email.isEmail('invalid_mail@dmail.'));
        expect(false).toBe(email.isEmail('invalid_mail@'));
        expect(false).toBe(email.isEmail('invalid_mail'));
        expect(false).toBe(email.isEmail(' '));
        expect(false).toBe(email.isEmail('invalid_mail@.com'));
        expect(false).toBe(email.isEmail('invalid_mail.com'));
    })
})