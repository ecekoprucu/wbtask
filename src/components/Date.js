import React, {useEffect, useState} from "react";
import {SingleDatePicker} from "react-dates";
import { ReactComponent as DateIcon } from '../assets/dateIcon.svg';
import '../style/date.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {useDispatch} from "react-redux";
import {
    checkInActionCreator,
    checkOutActionCreator, dropOffActionCreator,
    experienceDateActionCreator,
    pickUpActionCreator
} from "../actions/actions";

export default function Date ({placeholder, type}) {
    const [date, setDate] = useState(null);
    const [wrapperFocus, setWrapperFocus] = useState(false);
    const [focus, setFocus] = useState(false);
    const dispatch = useDispatch();

    function dispatchDateAction (date) {
        if(type === 'check-in') {
            dispatch(checkInActionCreator({
                checkIn: date.toString()
            }))
        }
        if(type === 'check-out') {
            dispatch(checkOutActionCreator({
                checkOut: date.toString()
            }))
        }
        if(type === 'date') {
            dispatch(experienceDateActionCreator({
                expDate: date.toString()
            }))
        }

        if(type === 'pick-up') {
            dispatch(pickUpActionCreator({
                pickUp: date.toString()
            }))
        }

        if(type === 'drop-off') {
            dispatch(dropOffActionCreator({
                dropOff: date.toString()
            }))
        }
    }

    useEffect(() => {
        setDate(null);
        setFocus(false);
        setWrapperFocus(false);
    }, [type]);

    return (
        <div onMouseEnter={() => setWrapperFocus(true)}
             onMouseLeave={() => setWrapperFocus(false)}
             className={`dateWrapper ${wrapperFocus ? 'focused' : ''}`}>
            <DateIcon/>
            <div>
                <SingleDatePicker id={type}
                                  date={date}
                                  focused={focus}
                                  noBorder
                                  placeholder={placeholder}
                                  numberOfMonths={1}
                                  onFocusChange={() => setFocus(!focus)} onDateChange={(date) => {
                                      setDate(date);
                                      dispatchDateAction(date);
                                      setWrapperFocus(false);
                                  }}
                />
                <p className="infoText">{!date ? 'Add date' : placeholder}</p>
            </div>
        </div>
    );
}
