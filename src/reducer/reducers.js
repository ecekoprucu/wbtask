import {combineReducers} from "redux";
import {
    SET_CHECKIN,
    SET_CHECKOUT,
    SET_STAY_LOCATION,
    SET_STAY_GUESTS,
    SET_LOG_RESULTS,
    SET_EXP_LOCATION,
    SET_EXP_DATE, SET_EXP_GUESTS, SET_RENTAL_LOCATION, SET_PICKUP_DATE, SET_DROPOFF_DATE
} from "../types/types";

const stayReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_STAY_LOCATION:
            return {...state, location: action.payload.location}
        case SET_CHECKIN:
            return {...state, checkIn: action.payload.checkIn}
        case SET_CHECKOUT:
            return {...state, checkOut: action.payload.checkOut}
        case SET_STAY_GUESTS:
            return {...state, stayGuest: action.payload.stayGuest}
        case SET_LOG_RESULTS:
            console.log(action.payload.data);
            return state;
        default:
            return state;
    }
}

const exploreReducer = (state={}, action) => {
    switch (action.type) {
        case SET_EXP_LOCATION:
            return {...state, expLocation: action.payload.expLocation};
        case SET_EXP_DATE:
            return {...state, expDate: action.payload.expDate};
        case SET_EXP_GUESTS:
            return {...state, expGuest: action.payload.expGuest};
        default:
            return state;
    }
}

const rentalReducer = (state={}, action) => {
    switch (action.type) {
        case SET_RENTAL_LOCATION:
            return {...state, rentalLocation: action.payload.rentalLocation}
        case SET_PICKUP_DATE:
            return {...state, pickUp: action.payload.pickUp};
        case SET_DROPOFF_DATE:
            return {...state, dropOff: action.payload.dropOff}
        default:
            return state;
    }
}

const reducers = combineReducers({
    stay: stayReducer,
    explore: exploreReducer,
    rental: rentalReducer
});

export default reducers;
