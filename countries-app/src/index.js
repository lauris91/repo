import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Query } from "react-apollo";
import { loader } from 'graphql.macro';


import CountryComponent from './country';

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const FEED_QUERY_COUNTRIES = loader('./graphql/countries.graphql')
const FEED_QUERY_COUNTRY = loader('./graphql/country.graphql')


class ExpandableCountryInfo extends React.Component{
	render(){
		const code = this.props.countryCode;
		return(
			<Query query={FEED_QUERY_COUNTRY} variables={{code}}>
		    	{
		    		({ loading, error, data }) => {
		    			if (loading) return <div className="loading">Loading...</div>
			        	if (error) return <div className="error">Error getting data! See logs for more info!</div>
			        	const countryData = data.country;
						return <CountryComponent data={countryData}/>
					}
			    }
		    </Query>
	    )
	}
}

class BasicCountryInfo extends React.Component{
  	constructor() {
    	super();
    	this.state = { 
    		expand: false 
    	};
  	}

  	clickHandle(){
  		console.log('sfsd')
		let showExpand = this.state.expand === false ? true : false
		this.setState({expand: showExpand})

	}

  	renderExpandableCountryInfo(expand, code) {
		if(expand === true){
			return <ExpandableCountryInfo countryCode={code} />
		} else {
			return null
		}
		
	}

	render(){
		return(
			 <div  
			 	className="basicCountryInfo"
			 	onClick={() => this.clickHandle()}
			 >
			 	<h1>{this.props.value} <span>({this.props.id})</span></h1>
			 	{this.renderExpandableCountryInfo(this.state.expand, this.props.id)}
			</div>

		);
	}
}

class Country extends React.Component{
	
	render(){
		return(
			<li>
				<BasicCountryInfo
					value={this.props.value}
					id={this.props.id}
				/>
			</li>
		);
	}
}

class CountriesList extends React.Component{

	render(){
		return (
	      <Query query={FEED_QUERY_COUNTRIES}>
	        {({ loading, error, data }) => {
	          if (loading) return <div className="loading">Loading...</div>
	          if (error) return <div className="error">Error getting data! See logs for more info!</div>
		    	
	          	const countriesArr = data.countries;

		    	return (
					<ul>
		            	{countriesArr.map(country => <Country key={country.code} id={country.code} value={country.name}/> )}
					</ul>
		          )
		        }}
	      </Query>
    	);
	}
}

class AppLayout extends React.Component{
	render(){
		return(
			<ApolloProvider client={client}>
				<div className="countriesList"> 
					<CountriesList />
				</div>
			</ApolloProvider>
		) 
	}
}

ReactDOM.render(<AppLayout />, document.getElementById('root'));