import React from 'react';
import { CountryProps } from '../shared/types'

interface CommonCountryProps {
    element: CountryProps
}

interface CountryElementProps extends CommonCountryProps {
    setExpand: (event?: any) => void,
    expand?: string
}

const ExpandedCountry: React.FC<CommonCountryProps> = ({
    element: {
        name,
        native,
        phone,
        continent,
        currency,
        languages,
        emoji,
        emojiU
    }
}): React.ReactElement => {
    return (
        <div className="expandableCountryInfo">
            <h4>Name: <span>{name};</span></h4>
            <h4>Native: <span>{native};</span></h4>
            <h4>Phone: <span>{phone};</span></h4>
            <h4>Continent: <span>{continent.name};</span></h4>
            <h4>Currency: <span>{currency};</span></h4>
            <h4>Languages: <span>{languages.length !== 0 ? languages.map(language => language.name).join(', ') : 'N/A'}</span></h4>
        </div>
    )
}


const Country: React.FC<CountryElementProps> = ({
    element: {
        code: countryCode,
        name
    },
    element,
    setExpand,
    expand
}): React.ReactElement => {
    const isExpanded = expand === countryCode

    return (
        <div
            className="basicCountryInfo"
            onClick={() => isExpanded ? setExpand('') : setExpand(countryCode)}
        >
            <h1>{name} <span>({countryCode})</span></h1>
            {isExpanded && (
                <ExpandedCountry element={element} />
            )}
        </div>
    );
}

export default Country