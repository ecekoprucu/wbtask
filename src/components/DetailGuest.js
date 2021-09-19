import React, {useState} from "react";
import '../style/detailGuest.css';

export function DetailGuest ({show, guestCount, guestCountSetter}) {
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    function increaseGuest (guestType) {
        if(guestType==='adult' && adultCount < 50) {
            setAdultCount(adultCount + 1);
            guestCountSetter(guestCount + 1);
        }

        if(guestType === 'children' && childrenCount < 50) {
            setChildrenCount(childrenCount + 1);
            guestCountSetter(guestCount + 1);
        }

        if(guestType === 'infant' && infantCount < 50) {
            setInfantCount(infantCount + 1);
            guestCountSetter(guestCount + 1);
        }
    }

    function decreaseGuest (guestType) {
        if(guestType==='adult' && adultCount > 0) {
            setAdultCount(adultCount - 1)
            guestCountSetter(guestCount - 1);
        }

        if(guestType === 'children' && childrenCount > 0) {
            setChildrenCount(childrenCount - 1);
            guestCountSetter(guestCount - 1);
        }

        if(guestType === 'infant' && infantCount > 0) {
            setInfantCount(infantCount - 1);
            guestCountSetter(guestCount - 1);
        }
    }

    return show ? (
        <div className="detailGuestContainer" data-testid="detailGuestContainer">
            <div className="adultWrapper">
                <div className="countWrapper">
                    <p className="headline">Adults</p>
                    <p className="ageDetail">Ages 13 or above</p>
                </div>
                <div className="countWrapper">
                    <span className="circle" data-testid="decrease" onClick={() => decreaseGuest('adult')}>-</span>
                    <p data-testid="adultCount" className="countNumber">{adultCount}</p>
                    <span className="circle" data-testid="increase" onClick={() => increaseGuest('adult')}>+</span>
                </div>
            </div>
            <div className="childrenWrapper">
                <div className="countWrapper">
                    <p className="headline">Children</p>
                    <p className="ageDetail">Ages 2-12</p>
                </div>
                <div className="countWrapper">
                    <span className="circle" onClick={() => decreaseGuest('children')}>-</span>
                    <p className="countNumber">{childrenCount}</p>
                    <span className="circle" onClick={() => increaseGuest('children')}>+</span>
                </div>
            </div>
            <div className="infantWrapper">
                <div className="countWrapper">
                    <p className="headline">Infants</p>
                    <p className="ageDetail">Ages 0-2</p>
                </div>
                <div className="countWrapper">
                    <span className="circle" onClick={() => decreaseGuest('infant')}>-</span>
                    <p className="countNumber">{infantCount}</p>
                    <span className="circle" onClick={() => increaseGuest('infant')}>+</span>
                </div>
            </div>
        </div>
    ) : null
}
