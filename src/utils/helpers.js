export const moneyFormat = value => {
    if (typeof value === 'number') {
        const moneyValue = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return moneyValue;
    }
    return value;
};

export const moneyFormatIntl = value => {
    if (typeof value === 'number') {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    return value;
};
