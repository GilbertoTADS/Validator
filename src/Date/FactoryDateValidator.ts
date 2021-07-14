import { AFactory } from "./AFactory";
import { DateValidator } from "./DateValidator";

export class FactoryDateValidator extends AFactory{
    public factoryMethod():DateValidator{
        return new DateValidator();
    }
}