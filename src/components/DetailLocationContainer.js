import React from "react";
import {DetailLocation} from "./DetailLocation";
import '../style/detailLocationContainer.css';

export function DetailLocationContainer ({show, changeLocation, matchingSearch}) {
    return show ? (
        <div data-testid="detailLocationContainer" className="detailLocationContainer">
            <p className="searchHeadline">Possible Locations</p>
            <div>
                {matchingSearch.map((location) => (
                    <DetailLocation changeLocation={changeLocation} key={location.id} location={location}/>
                ))}
            </div>
        </div>
    ) : null
}
