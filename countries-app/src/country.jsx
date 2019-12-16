import React from 'react';


class ExpandedCountry extends React.Component{
	render(){ 
		const data = this.props.data;
		const languages = data.languages;
		console.log(languages)
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
							<span key={idx}> {language.name + 
							(idx === (languages.length - 1) ? '' : ', ')}</span>		
						)
					})
				}
				</h4>
				
			</div>
		)
	}

}

export default ExpandedCountry;

