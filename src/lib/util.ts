export const toCapitalize = (str: string): string =>
    typeof str !== 'string' ? '' : str.charAt(0).toUpperCase() + str.slice(1)
