export type searchType = {
    city: string,
    country: string
}

export type CountryType = {
    code: string,
    country: string
}

export type Weather = {
    name: string,
    main: {
        feelsLike: number,
        temp: number
        temp_max: number
        temp_min: number
    }
}
