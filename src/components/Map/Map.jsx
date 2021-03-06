import React, { useState } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

import './Map.css'
import { useSelector } from 'react-redux'
import { currentGeoLocation } from '../../store/sms/reducer';
import { getFormatedPos, isValidPos } from '../../js/utils';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`
const createMapOptions = () => {
  return {
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry.fill',
        stylers: [
          {
            weight: '2.00',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#9c9c9c',
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2f2f2',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#7b7b7b',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#46bcec',
          },
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#c8d7d4',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#070707',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
    ],
  }
}

const Marker = ({ pos }) => <img src='/assets/images/map_marker.svg' alt="Marker" className="map-marker"/>

const Map = (props) => {
  const {location} = props;
  const {zoomLevel} = props;
  const {points} = props;

  const currentPos = useSelector(state => currentGeoLocation(state));
  let center = {
    lat: typeof location?.lat === 'number' ? location?.lat : parseFloat(location?.lat),
    lng: typeof location?.lng === 'number' ? location?.lng : parseFloat(location?.lng),
  }
  var markPoints =points;
  console.log('markerPoints: ', points);
  if (!isValidPos(center)) {
    center = currentPos;
    console.log ('error: ', center);
    markPoints = [];
  }
  console.log ('error1: ', center);

  const markIcon = "/assets/images/map_marker.png";

  const renderMarkers = (map, maps, pos) => {
    let marker = new maps.Marker({
      position: { lat: pos.lat, lng: pos.lng },
      map,
      size: new maps.Size(20, 32),
      icon: markIcon
    });
    return marker;
  };
  // const markerStyle =  {
  //   width: "100",
  //   height: "80px", 
  //   position: "absolute",
  //   top: "100%",
  //   left: "50%",
  //   transform: "translate(-50%, -100%)",
  // }
  
  return (
    <Wrapper>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCO34vxnjcT_NlL8oP6BtF-A2E9AqN2u-k" }}
          // bootstrapURLKeys={{ key: "AIzaSyCsPucz3DC6CLaiBWKaGqTwOydemBtCTrg" }}
          center={center}
          zoom={zoomLevel}
          options={createMapOptions}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, center)}
        >
          {/* {points.map((pos, index) => {
            let position = getFormatedPos(pos);
            console.log('marker1: ', pos);
            if (isValidPos(position)) {
              console.log('marker: ', pos);
              return <img src='/assets/images/map_marker.svg' alt="Marker" key={index} style={markerStyle} {...position}/>
            }
          })} */}
        </GoogleMapReact>
      </div>
    </Wrapper>
  )
}
export default Map
