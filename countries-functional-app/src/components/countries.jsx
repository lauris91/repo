import React from 'react';
import { loader } from 'graphql.macro';
import { Query } from "react-apollo";

import { Country } from './country';

const FEED_QUERY_COUNTRIES = loader('../graphql/countries.graphql')

export const Countries = () => {
  return(
    <Query query={FEED_QUERY_COUNTRIES}>
      {
        ({loading, error, data}) => {
          if(loading) return <div className="loading">Loading...</div>
          if(error) return <div className="error">Error getting data! See logs for more info!</div>

          const countriesArr = data.countries;
          return(
            <ul>
              {countriesArr.map(country => <Country key={country.code} id={country.code} value={country.name}/>)}
            </ul>
          )
        }
      }
    </Query>
  )
}
