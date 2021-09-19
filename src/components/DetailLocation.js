import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/clockIcon.svg';
import '../style/detailLocation.css';
import {useDispatch} from "react-redux";
import {locationActionCreator} from "../actions/actions";

export function DetailLocation ({location, changeLocation}) {
    const dispatch = useDispatch();

    function setLocation (location) {
        dispatch(locationActionCreator({
            location: location
        }))
        changeLocation(location);
    }

    return (
        <div className="detailLocationWrapper" onClick={() => {
            setLocation(location.name);
        }}>
            <ClockIcon/>
            <p className="locationName">
                {location.name}
            </p>
        </div>
    )
}
