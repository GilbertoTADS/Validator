import { EmailValidator } from "Email";

export abstract class AEmailValidator{
    constructor(){}
    public abstract factoryMethod():EmailValidator

}