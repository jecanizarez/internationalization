import React from 'react';
import {FormattedDate, FormattedNumber, FormattedPlural} from 'react-intl';

export default class Job extends React.Component {

  	render() {
		let messages = {
			"en":{
				"singular": "million",
				"plural":"millions"
			},
			"es":{
				"singular": "millon",
				"plural":"millones"
			}
		}
		if(navigator.language.startsWith("es")){
			messages = messages.es; 

		}
		else{
			messages = messages.en; 
		}
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary} <FormattedPlural value={this.props.offer.salary} one={messages.singular} other={messages.plural} /></td>
      			<td>{this.props.offer.city}</td>
      			<td><FormattedDate value = {this.props.offer.date}/></td>
				<td><FormattedNumber value  = {this.props.offer.visits}/></td>
  			</tr>
  		);
	}
}