import React, {useEffect, useState} from 'react';
import { ReactComponent as PersonIcon } from '../assets/person.svg';
import '../style/guests.css';
import {DetailGuest} from "./DetailGuest";
import {useDispatch} from "react-redux";
import {experienceGuestActionCreator, stayGuestsActionCreator} from "../actions/actions";

export function Guest ({type}) {
    const [selectedGuest, setSelectedGuest] = useState(0);
    const [focus, setFocus] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedGuest(0);
        setShowDetail(false);
        setFocus(false);
    },[type])

    useEffect(() => {
       if(type==='stay') {
           dispatch(stayGuestsActionCreator({
               stayGuest: selectedGuest
           }))
       }

       if(type === 'experience') {
           dispatch(experienceGuestActionCreator({
               expGuest: selectedGuest
           }))
       }
    }, [selectedGuest])

    return (
        <div className="guestContainer">
            <div data-testid="guestWrapper"
                 className={`guestWrapper ${focus ? 'focused' : ''}`}
                 onClick={() => setShowDetail(!showDetail)}
                 onMouseEnter={() => setFocus(true)}
                 onMouseLeave={() => setFocus(false)}>
                <PersonIcon/>
                <div className="guestInputWrapper">
                    <p data-testid="guestCount">{selectedGuest > 0 ? `${selectedGuest} Guests` : 'Guests'}</p>
                    <p>{selectedGuest > 0 ? 'Guests' : 'Add Guests'}</p>
                </div>
            </div>
            <DetailGuest show={showDetail} guestCount={selectedGuest} guestCountSetter={setSelectedGuest}/>
        </div>
    )
}

