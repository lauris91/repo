
interface Classifier {
    code: string,
    name: string
}

export interface CountryProps {
    code: string,
    name: string,
    native: string,
    phone: string,
    continent: Classifier,
    currency: string,
    languages: Classifier[],
    emoji: string,
    emojiU: string
}