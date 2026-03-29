export const formatTextDate = (text: string): string => {
    const cleaned = text.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);

    if (!match) return text;

    const [, day, month, year] = match;
    let formatted = "";

    if (day) formatted += day;
    if (month) formatted += `.${month}`;
    if (year) formatted += `.${year}`;

    return formatted;
};