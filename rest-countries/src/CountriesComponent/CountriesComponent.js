import React, { Component } from 'react';
import axios from 'axios';
import CountryComponent from '../CountryComponent/CountryComponent';
import './CountriesComponent.css'
import { CommonLoading } from 'react-loadingg';

class CountriesComponent extends Component {
    constructor() {
        super();
        this.state = {countriesData: [], dataLoaded: false};
    }
    componentDidMount() {
        this.getAllCountries();
    }

    getAllCountries() {
        axios.get(`https://restcountries.com/v2/all`)
        .then(res => {
            const countriesData = res.data;
            this.setState({ countriesData: countriesData, dataLoaded: true });
        })
    }

    render() {
        const countries = this.state.countriesData.map((countryData, i) => {
            if(this.props.inputCountryValue==="" && this.props.selectedRegion===""){
                return <CountryComponent countryData = {countryData}/>
            } else {
                if(this.props.inputCountryValue!=="" && this.props.selectedRegion!=="") {
                    if(countryData.name.includes(this.props.inputCountryValue) && countryData.region.includes(this.props.selectedRegion))
                        return <CountryComponent countryData = {countryData}/>
                } else {
                    if(this.props.inputCountryValue!=="" && this.props.selectedRegion==="")
                        if(countryData.name.includes(this.props.inputCountryValue))
                            return <CountryComponent countryData = {countryData}/>
                    if(this.props.inputCountryValue==="" && this.props.selectedRegion!=="")
                        if(countryData.region === this.props.selectedRegion)
                            return <CountryComponent countryData = {countryData}/>
                }
            }
        });
        if(!this.state.dataLoaded) {
            return <CommonLoading />;
        } else {
            return (
                <div className="countriesGrid">
                    {countries}
                </div>
              );
        }
    }
}

export default CountriesComponent;