import { Response } from "./../helpers/Error/response";
import { FactoryDateValidator } from "./FactoryDateValidator";

export class DateValidator extends FactoryDateValidator{ 
    constructor(){
        super();
    }
    public isDate(date:string):Response|boolean{
        if(!date) return Response.emit(true,false,'Param is required',date);
        return /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(date);
    }
    public currencyDate():string{
        const date = new Date()
        const day = date.getDate().toString().padStart(2,'0')
        const month = (date.getMonth()+1).toString().padStart(2,'0')
        const year = date.getFullYear()
        return `${year}-${month}-${day}`;
    }
    isEqualToday(date:string):Response|boolean{
        const isDate = this.isDate(date);
        if(isDate instanceof Response) 
            return Response.emit(isDate.error,isDate.success,isDate.message, isDate.data);
        const today = this.currencyDate();        
        return Date.parse(date) == Date.parse(today);
    }
    isBigger(dateOne:string,dateTwo:string):Response|boolean{
        const isDateOne = this.isDate(dateOne);
        const isDateTow = this.isDate(dateTwo);
        if(isDateOne instanceof Response) return Response.emit(isDateOne.error,isDateOne.success,isDateOne.message, isDateOne.data);
        if(isDateTow instanceof Response) return Response.emit(isDateTow.error,isDateTow.success,isDateTow.message, isDateTow.data);
        return Date.parse(dateOne) > Date.parse(dateTwo);
    }
    isLess(dateOne:string,dateTwo:string):Response|boolean{
        const isDateOne = this.isDate(dateOne);
        const isDateTow = this.isDate(dateTwo);
        if(isDateOne instanceof Response) return Response.emit(isDateOne.error,isDateOne.success,isDateOne.message, isDateOne.data);
        if(isDateTow instanceof Response) return Response.emit(isDateTow.error,isDateTow.success,isDateTow.message, isDateTow.data);
        return Date.parse(dateOne) < Date.parse(dateTwo);
    }
}