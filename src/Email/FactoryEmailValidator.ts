import { AEmailValidator } from "./AEmailValidator"
import { EmailValidator } from "./EmailValidator";

export class FactoryEmailValidator extends AEmailValidator{
    public factoryMethod():EmailValidator{
        return new EmailValidator();
    }

}