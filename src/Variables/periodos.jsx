export const TIME_PERIODS = {
    DAY: '86400',
    WEEK: '604800',
    MONTH: '2592000',
    YEAR: '31536000',
    CUSTOM: (days) => (days * 86400).toString() // Para períodos personalizados
};