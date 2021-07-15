import { AFactoryCPFValidator } from './AFactoryCPFValidator';
import { CPFValidator } from "./CPFValidator";

export class FactoryCPFValidator extends AFactoryCPFValidator{
  constructor(){
    super()
  }
  public factoryMethod():CPFValidator{
    return new CPFValidator()
  }
}