import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg';
import {logResultsActionCreator} from "../actions/actions";
import '../style/searchButton.css';
import {useSelector, useDispatch} from "react-redux";

export function SearchButton ({type}) {
    const stayResult = useSelector(state => state.stay);
    const expResult = useSelector(state => state.explore);
    const rentalResult = useSelector(state => state.rental);
    const dispatch = useDispatch();

    function showResult (type) {
        if(type === 'stay') {
            dispatch(logResultsActionCreator(stayResult))
        }

        if(type === 'experience') {
            dispatch(logResultsActionCreator(expResult));
        }

        if(type === 'rental') {
            dispatch(logResultsActionCreator(rentalResult));
        }
    }
    return (
        <div className="searchButtonWrapper" onClick={() => showResult(type)}>
            <SearchIcon/>
        </div>
    )
}
