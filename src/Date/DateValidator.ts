import { FactoryDateValidator } from "./FactoryDateValidator";

export class DateValidator extends FactoryDateValidator{
    constructor(){
        super();
    }
    public isDate(date:string):boolean{
        if(!date) return false;
        return /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(date);
    }
}

