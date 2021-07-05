import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class CountryInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            countryName: window.location.href.split('/').pop(),
            countryData: [],
            countryBorders: []
        };
    }

    componentDidMount() {
        this.getCountryInfo();
    }

    getCountryInfo() {
        axios.get(`https://restcountries.eu/rest/v2/name/` + this.state.countryName)
        .then(res => {
            const countryData = res.data;
            this.getBorderCountriesNames(countryData[0]);
            this.setState({ countryData: countryData[0] });
        })
    }

    getBorderCountriesNames(countryData) {
        countryData.borders.forEach(borderCountryCode => {
            axios.get(`https://restcountries.eu/rest/v2/alpha/` + borderCountryCode)
            .then(res => {
                this.setState(prevState => ({
                    countryBorders: [...prevState.countryBorders, res.data.name]
                }))
            })
        });
    }

    render() {
        // const topLevelDomain = [];
        // this.state.countryData.topLevelDomain.forEach(domain => {
        //     topLevelDomain.push(domain + " ")
        // });
        return (
            <div className="countryDetailsComponentWrapper">
                <Link to='/'>
                    <button>Back</button>
                </Link>
                <div className="countryDetailsComponent">
                    <div>
                        <img style={{width:"300px", height:"200px"}} src={this.state.countryData.flag} alt=""/>
                    </div>
                    
                    <div>
                        <h2>{this.state.countryData.name}</h2>
                        <div className="countryDetails">
                            <div>
                                <p><span className="bold">Native Name: </span>{this.state.countryData.nativeName}</p>
                                <p><span className="bold">Population: </span>{this.state.countryData.population}</p>
                                <p><span className="bold">Region: </span>{this.state.countryData.region}</p>
                                <p><span className="bold">Sub Region: </span>{this.state.countryData.subregion}</p>
                                <p><span className="bold">Capital: </span>{this.state.countryData.capital}</p>
                            </div>
                            <div>
                                <p>
                                    {
                                        this.state.countryData.topLevelDomain?.length!==1?
                                        <span className="bold">Top Level Domains: </span>:
                                        <span className="bold">Top Level Domain: </span>
                                    }
                                    {this.state.countryData.topLevelDomain?.join(' ')}
                                </p>
                                <p><span className="bold">Curriencies: </span>{this.state.countryData.currencies?.map((currency, index) => (
                                    <>{index!==0?", ": null}{currency.name}</>
                                ))}</p>
                                <p><span className="bold">Languages: </span>{this.state.countryData.languages?.map((language, index)=> (
                                    <>{index!==0?", ": null}{language.name}</>
                                ))}</p>
                            </div>
                        </div>
                        <p><span className="bold">Border Countries: </span>
                        <p className="mobileOnly"></p>
                        {this.state.countryBorders?.map((borderCountry, index) => (
                            <Link to={`/country/${borderCountry.toLowerCase()}`}>
                                <button className="smallbutton" onClick={()=>this.setState({countryName: borderCountry}, () => window.location.reload())}>{borderCountry}</button>
                            </Link>
                        ))}
                        </p>

                    </div>
                </div>
            </div>
            );
    }
}
export default CountryInfoComponent;