import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import Marker from '../marker/marker'
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';
import * as markerData from '../../data/markers';


class Display extends Component {  

    state = {
        city: null,
        description: null,
        currentTemp: null,
        humidity: null,
        windSpeed: null,
        windDirection: null,
        precipitationChance: null,
        iconURL: null,
        displayModal: false,
        loading: false,
    }

    componentDidMount() {
        for(let marker of markerData.markers){
            //this.getCall(marker.lat, marker.long)
        }
        // this.getCall();
    }

    getCall = async (lat, lng) => {  
        // const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=1ef7818f68bfad277d85d9eee7072931');
        const api_call = await fetch(`https://api.weather.gov/points/${lat},${lng}`);
        const response = await api_call.json();

        if(response.properties){
            //To get all possible api calls for different data use console statement below
            //console.log(response.properties)

            //api calls  
            this.getWeather(response.properties.forecast)
            //this.getWeather(response.properties.forecastGridData)
        }
      }

    getWeather = async (call) => {
        
        const api_call = await fetch(call);
        
        const response = await api_call.json();

        console.log(response);
        const desc = response.properties.periods[0].shortForecast
        const temp = response.properties.periods[0].temperature
        const windSpeed = response.properties.periods[0].windSpeed
        const windDirection = response.properties.periods[0].windDirection
        const iconURL = response.properties.periods[0].icon

        this.setState({loading: false, 
                description: desc, temperature: temp,
                windSpeed: windSpeed, windDirection: windDirection,
                iconURL: iconURL})
    }

    displayCityDetails = (chosenCity, lat, lng) => {
        this.setState({city: chosenCity, loading: true, displayModal: true});

        this.getCall(lat, lng)
    }

    onMapClick = (event) => {
        this.setState({loading: true, displayModal: true});
        this.getCall(event.lat, event.lng)
    }

    modalClosed = () => {
        this.setState({displayModal: false})
    }

  
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%'
        }

        const spinner = this.state.loading ? <Spinner /> : null;

        const modal = this.state.displayModal ? <Modal 
            showModal={this.state.displayModal}
            modalClosed={this.modalClosed}
            city={this.state.city}
            description={this.state.description}
            temperature={this.state.temperature}
            windSpeed={this.state.windSpeed}
            windDirection={this.state.windDirection}
            icon={this.state.iconURL}/> : null

        let markersOnMap = markerData.markers.map(marker => (
            <Marker
                lat={marker.lat}
                lng={marker.long}
                key={marker.id}
                title={marker.id}
                displayCityDetails={() => this.displayCityDetails(marker.id, marker.lat, marker.long)}/>
        ));

        return (
            <div>
                <GoogleMap
                    style={mapStyles}
                    bootstrapURLKeys={{ key: 'AIzaSyAQM-xeQqZLNAdmdd1qDADS2Puag7RKSCQ' }}
                    center={{ lat: 30, lng: -95 }}
                    zoom={4.5}
                    onClick={(event) => this.onMapClick(event)}
                >  
                    {markersOnMap}
                </GoogleMap>
                {spinner}
                {modal}
            </div>
        )
  }
}

export default Display;
