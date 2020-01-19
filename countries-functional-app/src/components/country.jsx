import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { Query } from "react-apollo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { MoreInfo } from './moreInfo';


const FEED_QUERY_COUNTRY = loader('../graphql/country.graphql');

const ExpandedCountryInfo = ({data}) => {
  const languages = data.languages;
  return(
    <div className="expandableCountryInfo">
      <h4>Name: <span>{data.name};</span></h4>
    	<h4>Native: <span>{data.native};</span></h4>
    	<h4>Phone: <span>{data.phone};</span></h4>
    	<h4>Continent: <span>{data.continent.name};</span></h4>
    	<h4>Currency: <span>{data.currency};</span></h4>
    	<h4>Languages:
      	{
      	   languages.map((language, idx) => {
      		     return(
      				       <span key={idx}>{language.name + (idx === (languages.length - 1) ? '' : ', ')}</span>
      				 )
      		})
      	}
    	</h4>

      <Router>
        <Link to={data.name}>Click to see more info</Link>
        
          <Route path='/' component={MoreInfo} />
        
      </Router>

    </div>
  );
}

const ExpandedCountry = ({countryCode}) => {
        return(
          <Query query={FEED_QUERY_COUNTRY} variables={{countryCode}}>
            {
              ({ loading, error, data }) => {
                if (loading) return <div className="loading">Loading...</div>
                if (error) return <div className="error">Error getting data! See logs for more info!</div>

                const countryData = data.country;
                return <ExpandedCountryInfo data={countryData} />
              }
            }
          </Query>
        )
}

const BasicCountryInfo = ({value, id}) => {
  const [expand, setExpand] = useState(false);

  const renderExpandableCountryInfo = (code) =>{
    if(expand === true){
      return <ExpandedCountry countryCode={code}/>
    } else {
      return null;
    }
  }

  return(
      <div
        className="basicCountryInfo"
        onClick={event => setExpand(expand === false ? true : false)}
      >
          <h1>{value} <span>({id})</span></h1>
          {renderExpandableCountryInfo(id)}
     </div>
  )
}

export const Country = ({value, id}) => {
  return(
			<li>
				<BasicCountryInfo
					value={value}
					id={id}
				/>
			</li>
		);
}

