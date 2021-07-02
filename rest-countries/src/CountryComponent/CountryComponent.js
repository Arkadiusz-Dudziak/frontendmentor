import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CountryComponent extends Component {
    render() {
        return (
            <div className="countryContainer" name={this.props.countryData.name.toLowerCase()}>
                <img style={{width:"300px", height:"180px"}} src={this.props.countryData.flag}
                    alt=""/>
                <div className="countryInfo">
                    <b>{this.props.countryData.name}</b>
                    <p><span className="bold">Population: </span>{this.props.countryData.population}</p>
                    <p><span className="bold">Region: </span>{this.props.countryData.region}</p>
                    <p><span className="bold">Capital: </span>{this.props.countryData.capital}</p>
                </div>
            </div>            
          );
    }
}

export default CountryComponent;