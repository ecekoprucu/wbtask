import React from 'react';
import Date from "./Date";
import {Location} from "./Location";
import '../style/searchComponent.css';
import {Guest} from "./Guest";
import {SearchButton} from "./SearchButton";

export default function SearchComponent ({type}) {
    if(type === 'experience') {
        return (
            <div className="searchContainer">
                <Location type="experience" title="Location"/>
                <Date placeholder="Date" type="date"/>
                <Guest type="experience"/>
                <SearchButton type="experience"/>

            </div>
        )
    }

    if(type === 'rental') {
        return (
            <div className="searchContainer">
                <Location type="rental" title="City or Airport" />
                <Date placeholder="Pick Up" type="pick-up"/>
                <Date placeholder="Drop Off" type="drop-off"/>
                <SearchButton type="rental"/>
            </div>
        )
    }

    return (
        <div className="searchContainer">
            <Location type="stay" title="Location"/>
            <Date placeholder="Check In" type="check-in"/>
            <Date placeholder="Check Out" type="check-out"/>
            <Guest type="stay"/>
            <SearchButton type="stay"/>
        </div>
    )
}

