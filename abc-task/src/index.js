import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ReactCountryFlag from "react-country-flag";
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// className="countryDetailed"
// const FEED_QUERY =

class CountryExtended extends React.Component{
  render(){
    const array = [{"name":"viens", "emoji":"🇦🇪", "emojiU":"U+1F1E6 U+1F1FA"}, {"name":"tikaiViens", "emoji":"🇦🇺", "emojiU":"U+1F1E6 U+1F1FA"}]
    return(
      <div>
        {array.map(function(arrElement, idx){
            const emojiEdited = arrElement.emoji.toUpperCase();

            return(
              <div key={idx}>
                Šeit ir paplašināts mega info!!!!! {arrElement.name + (idx ? ' ' : ', ')}
                // <span className="emoji">{emojiEdited}</span>
                <ReactCountryFlag code={arrElement.emoji} svg/>

              </div>
            )
        })}
      </div>
    )
  }
}

class CountryInfo extends React.Component{
	constructor() {
    	super();
    	this.state = { show: false };
  	}

  clickHandle(){
      const showExtendedInfo = this.state.show === true ? false : true;
  		this.setState({show: showExtendedInfo});
  }

  renderCountryExtended(){
    if(this.state.show === true){
      return <CountryExtended />
    } else {
      return null;
    }
  }

	render(){
		return(
			<div
        onClick={() => this.clickHandle()}
      >
				{this.props.value}
        {this.renderCountryExtended()}
			</div>
		)
	}
}

class CountryRow extends React.Component{
	render(){
		return(
			<li>
        <CountryInfo
          className="countryBasicInfo"
          value={this.props.value}
          link={this.props.link}
        />
			</li>
		);
	}
}

class CountriesList extends React.Component{
	renderContryRow(name) {
    return (
			<CountryRow
       value={name}
      />
    );
  }

	render(){
		return(
			<div className="countriesList">
				<ul>
					{this.renderContryRow('Estonia')}
					{this.renderContryRow('Latvia')}
					{this.renderContryRow('Lithuania')}
				</ul>
			</div>
		);
	}
}


ReactDOM.render(
	<ApolloProvider client={client}>
		<CountriesList />,
	</ApolloProvider>,
	document.getElementById('root')
);
