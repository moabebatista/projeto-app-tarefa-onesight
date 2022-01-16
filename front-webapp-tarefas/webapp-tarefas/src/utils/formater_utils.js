import { format } from 'date-fns';

export function formatToDate(date) {
    const generateDate = new Date(date);
    return format(generateDate, 'dd/MM/yyyy');
}
export function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
}