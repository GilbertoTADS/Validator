import { CPFValidator } from "./CPFValidator";

export abstract class AFactoryCPFValidator{
  public abstract factoryMethod():CPFValidator
}