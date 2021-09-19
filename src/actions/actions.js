import {
    SET_STAY_LOCATION,
    SET_EXP_LOCATION,
    SET_CHECKIN,
    SET_CHECKOUT,
    SET_LOG_RESULTS,
    SET_STAY_GUESTS,
    SET_EXP_DATE,
    SET_EXP_GUESTS,
    SET_RENTAL_LOCATION, SET_PICKUP_DATE, SET_DROPOFF_DATE
} from "../types/types";

export const locationActionCreator = (data) => {
    return {
        type: SET_STAY_LOCATION,
        payload: {
            location: data.location
        }
    }
}

export const checkInActionCreator = (data) => {
    return {
        type: SET_CHECKIN,
        payload: {
            checkIn: data.checkIn
        }
    }
}

export const checkOutActionCreator = (data) => {
    return {
        type: SET_CHECKOUT,
        payload: {
            checkOut: data.checkOut
        }
    }
}

export const stayGuestsActionCreator = (data) => {
    return {
        type: SET_STAY_GUESTS,
        payload: {
            stayGuest: data.stayGuest
        }
    }
}

export const logResultsActionCreator = (data) => {
    return {
        type: SET_LOG_RESULTS,
        payload: {
            data
        }
    }
}

export const experienceLocationActionCreator = (data) => {
    return {
        type: SET_EXP_LOCATION,
        payload: {
            expLocation: data.expLocation
        }
    }
}

export const experienceDateActionCreator = (data) => {
    return {
        type: SET_EXP_DATE,
        payload: {
            expDate: data.expDate
        }
    }
}

export const experienceGuestActionCreator = (data) => {
    return {
        type: SET_EXP_GUESTS,
        payload: {
            expGuest: data.expGuest
        }
    }
}

export const rentalLocationActionCreator = (data) => {
    return {
        type: SET_RENTAL_LOCATION,
        payload: {
            rentalLocation: data.rentalLocation
        }
    }
}

export const pickUpActionCreator = (data) => {
    return {
        type: SET_PICKUP_DATE,
        payload: {
            pickUp: data.pickUp
        }
    }
}

export const dropOffActionCreator = (data) => {
    return {
        type: SET_DROPOFF_DATE,
        payload: {
            dropOff: data.dropOff
        }
    }
}
