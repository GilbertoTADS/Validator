import { FactoryEmailValidator } from "./FactoryEmailValidator";

export class EmailValidator extends FactoryEmailValidator{
    constructor(){
        super();
    }
    public isEmail(email:string):boolean {
        return /[a-z]+\@[a-z]+\.[a-z]+/g.test(email);
    }
}
