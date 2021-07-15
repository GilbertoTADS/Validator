//import { Factory } from './../

describe('Class CPFValidator', () => {
  test('Must return true if data is CPF valid', () => {
    const cpfValidator = new CPFValidator();
    const cpfValid = '840.145.070-50';
    const cpfValid2 = '03286544000';
    expect(true).toBe(cpfValidator.isValid(cpfValid));
    expect(true).toBe(cpfValidator.isValid(cpfValid2));
  })
  test('Must return false if data is not CPF valid', () => {
    const cpfValidator = new CPFValidator();
    const cpfValid = '987.097.176-00';
    const cpfValid2 = '09487561023';
    const cpfValid3 = '';
    expect(false).toBe(cpfValidator.isValid(cpfValid));
    expect(false).toBe(cpfValidator.isValid(cpfValid2));
    expect(false).toBe(cpfValidator.isValid(cpfValid3));
  })
  test('Must return true if data is formatted as CPF valid', () => {
    const cpfValidator = new CPFValidator();
    const cpfValid = '987.097.176-00';
    const cpfValid2 = '094.875.610-23';
    expect(true).toBe(cpfValidator.isCPF(cpfValid));
    expect(true).toBe(cpfValidator.isCPF(cpfValid2));
  })
  test('Must return false if data is not formatted as CPF valid', () => {
    const cpfValidator = new CPFValidator();
    const cpfValid = '987.097.17600';
    const cpfValid2 = '094.875610-23';
    const cpfValid3 = '094875.610-23';
    const cpfValid4 = '09487561023';
    const cpfValid5 = ' ';
    expect(false).toBe(cpfValidator.isCPF(cpfValid));
    expect(false).toBe(cpfValidator.isCPF(cpfValid2));
    expect(false).toBe(cpfValidator.isCPF(cpfValid3));
    expect(false).toBe(cpfValidator.isCPF(cpfValid4));
    expect(false).toBe(cpfValidator.isCPF(cpfValid5));
  })
})