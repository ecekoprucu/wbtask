import React from 'react';
import {locations} from '../data/locations';
import {DetailLocation} from "./DetailLocation";

export function Detail ({type, hidden}) {
    if(type === 'location') {
        return (
            <div className={hidden ? 'hidden' : ''}>
                {locations.map(location => (
                    <DetailLocation location={location}/>
                ))}
            </div>
        )
    }

    return (
        <div className={hidden ? 'hidden' : ''}>
            Test
        </div>
    )
}
