import numeral from 'numeral';

export const formatNumber = number => numeral(number).format('R$.0,00');
