import React from 'react';
import Job from "./job";
import { IntlProvider, FormattedMessage } from "react-intl";
export default function JobsList(props){

    const state = { 
  	"offers": [
    	{
    	  "id": "0001",
        "name": "Manager",
    	  "company": "Schneider Electric", 
    	  "salary": 4.5,
    	  "city": "Bogotá, Colombia",
        "date": "2019-03-26"
      }, 
      {
        "id": "0002",
        "name": "Software Engineer",
        "company": "Google Inc.", 
        "salary": 20,
        "city": "Palo Alto, CA, USA",
        "date": "2019-03-27"
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "Clínica La Aurora", 
        "salary": 1,
        "city": "Cali, Colombia",
        "date": "2019-03-28"
      }
    ]
  };   
  let tema = "";
  if(navigator.language.startsWith("en")){
    tema = "thead-ligth";
  }
  else{
    tema = "thead-dark";
  }
  return(
      <div>
        <table className="table">
          <thead className={tema}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id= "Position" defaultMessage="Position"/></th>
              <th scope="col"><FormattedMessage id= "Company" defaultMessage ="Company"/></th>
              <th scope="col"><FormattedMessage id= "Salary" defaultMessage ="Salary"/></th>
              <th scope="col"><FormattedMessage id= "City" defaultMessage ="City"/></th>
              <th scope="col"><FormattedMessage id= "PulibicationDate" defaultMessage ="Pulibication Date"/></th>
              <th scope="col"> <FormattedMessage id= "Views" defaultMessage ="Views"/></th>  
            </tr>
          </thead>
          <tbody>
              {state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
  );
}