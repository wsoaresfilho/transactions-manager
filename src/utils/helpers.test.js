import { moneyFormat, moneyFormatIntl } from './helpers';

describe('moneyFormat helper', () => {
    it('when value is a number should return formated value correctly', () => {
        const value = 123;
        const fvalue = moneyFormat(value);
        expect(fvalue).toBe('123.00');
    });
    it('when value is not a number should return the own value', () => {
        const value = '123';
        const fvalue = moneyFormat(value);
        expect(fvalue).toBe(value);
    });
});

describe('moneyFormatIntl helper', () => {
    it('when value is a number should return formated value correctly', () => {
        const value = -1234567;
        const fvalue = moneyFormatIntl(value);
        expect(fvalue).toBe('-R$1,234,567.00');
    });
    it('when value is not a number should return the own value', () => {
        const value = '-1234567';
        const fvalue = moneyFormatIntl(value);
        expect(fvalue).toBe(value);
    });
});
