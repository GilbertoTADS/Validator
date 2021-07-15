import { FactoryCPFValidator } from "./FactoryCPFValidator";

export class CPFValidator extends FactoryCPFValidator{
  constructor(){
    super()
  }
  isCPF(cpf:string):boolean{
    if(!cpf) return false;
    return /[\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2}/.test(cpf);      
  }
  isValid(cpf:string):boolean{
    if(!cpf) return false;
    cpf = cpf.replace(/[^\d]/g,'')
    let Sum:number;
    let Rest:number;
    Sum = 0;
    if (cpf == "00000000000") return false;
    for(let i=1; i<=9; i++) 
      Sum = Sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Rest = (Sum * 10) % 11;
    if ((Rest == 10) || (Rest == 11)) 
      Rest = 0;
    if (Rest != parseInt(cpf.substring(9, 10)) ) 
      return false;
    Sum = 0;
    for (let i = 1; i <= 10; i++) 
      Sum = Sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Rest = (Sum * 10) % 11;
    if ((Rest == 10) || (Rest == 11)) 
      Rest = 0;
    if (Rest != parseInt(cpf.substring(10, 11) ) ) 
      return false;
    return true;
  }
}
