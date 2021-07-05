import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CountryComponent extends Component {
    render() {
        return (
                <div>
                    <div className="countryContainer" name={this.props.countryData.name.toLowerCase()}>
                        <Link to={`/country/${this.props.countryData.name.toLowerCase()}`}>
                            <img style={{width:"350px", height:"200px"}} src={this.props.countryData.flag}
                                alt=""/>
                        </Link>
                        <div className="countryInfo">
                            <b>{this.props.countryData.name}</b>
                            <p><span className="bold">Population: </span>{this.props.countryData.population}</p>
                            <p><span className="bold">Region: </span>{this.props.countryData.region}</p>
                            <p><span className="bold">Capital: </span>{this.props.countryData.capital}</p>
                        </div>
                    </div>
                </div>
                        
          );
    }
}

export default CountryComponent;