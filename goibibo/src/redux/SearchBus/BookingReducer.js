import { BOOKING_DATA } from './ActionType'

export const initState = {

    bookingData:{},
    recentSearches:[]
}

export const BookingReducer = (state=initState,{type,payload}) => {

    switch(type) {

        case BOOKING_DATA:

            return {
                bookingData: payload,
                recentSearches: [...state.recentSearches,payload]
            }

            default:
                return state;
    }
}
