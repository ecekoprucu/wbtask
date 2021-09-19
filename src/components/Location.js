import React, {useState, useEffect} from 'react';
import { ReactComponent as MapPin } from '../assets/mapPin.svg';
import '../style/location.css';
import {useDispatch} from "react-redux";
import {locations} from "../data/locations";
import {locationActionCreator, experienceLocationActionCreator, rentalLocationActionCreator} from "../actions/actions";
import {DetailLocationContainer} from "./DetailLocationContainer";

export function Location ({title, type}) {
    const dispatch = useDispatch();
    const [locationSearch, setLocationSearch] = useState('');
    const [focus, setFocus] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [matchingSearch, setMatchingSearch] = useState(locations);

    function findMatch (key) {
        return locations.filter((location) => location.name.toLowerCase().includes(key.toLowerCase()));
    }

    useEffect(() => {
        setLocationSearch('');
        setShowDetail(false);
        setFocus(false);
    },[type])

    useEffect(() => {
        const match = findMatch(locationSearch);
        if(match) {
            setMatchingSearch(match);
        }
        if(type === 'experience') {
            dispatch(experienceLocationActionCreator({
                expLocation: locationSearch
            }))
        }

        if(type === 'stay') {
            dispatch(locationActionCreator({
                location: locationSearch
            }))
        }

        if (type === 'rental') {
            dispatch(rentalLocationActionCreator({
                rentalLocation: locationSearch
            }))
        }
    }, [locationSearch]);

    return (
        <div className="locationContainer">
            <div data-testid="locationWrapper" onClick={() => setShowDetail(!showDetail)}
                 className={`locationWrapper ${focus ? 'focused' : ''}`}
                 onMouseEnter={() => setFocus(true)}
                 onMouseLeave={() => setFocus(false)}>
                <MapPin/>
                <div className="locationInputWrapper">
                    <p>{title}</p>
                    <input type="text" data-testid="locationInput" placeholder={type === 'rental' ? 'Pick up location' : "Where are you going?"} value={locationSearch} onChange={(e) => {
                        setLocationSearch(e.target.value);
                    }}/>
                </div>
            </div>
            <DetailLocationContainer matchingSearch={matchingSearch} changeLocation={setLocationSearch} show={showDetail}/>
        </div>
    )
}

