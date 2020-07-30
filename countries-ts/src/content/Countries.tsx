import React, { useState } from 'react'
import { loader as gqlLoader } from 'graphql.macro'
import { Query } from 'react-apollo'
import Country from './Country'
import Loader from 'react-loader-spinner'
import { CountryProps } from '../shared/types'

const FEED_QUERY_COUNTRIES = gqlLoader('../gql/countries.graphql')

interface Data {
    countries: CountryProps[];
};

const Countries: React.FC = (): React.ReactElement => {
    const [expand, setExpand] = useState<string>('');
    

    return (
        <div className='countriesList'>
            <Query<Data, {}> query={FEED_QUERY_COUNTRIES}>
                {({ loading, data }): React.ReactElement => {
                    if (loading) return (
                        <div className='d-flex justify-content-center'>
                            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                        </div>
                    )

                    return (
                        <ul>
                            {data && data.countries && data.countries.map((country: CountryProps) => (
                                <li key={country.code}>
                                    <Country
                                        element={country}
                                        setExpand={setExpand}
                                        expand={expand}
                                    />
                                </li>
                            ))}
                        </ul>
                    )
                }}
            </Query>
        </div>
    )
}



export default Countries