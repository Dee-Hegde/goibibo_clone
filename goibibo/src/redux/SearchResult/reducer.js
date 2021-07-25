import { UPDATE_BUS, GET_SELECTED_SEATS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_FILTER_ITEMS, GET_UPDATED_DATA } from "./actionType";

const init = {
    data : [],
    bus_filters : [],
    isLoading : false,
    isError : false,
    seats: [],
    bus_id: "",
    isConfirmed: false
}

const resultReducer = (state = init, action) => {
    switch (action.type) {

        case UPDATE_BUS: {
            return {
                ...state, bus_id: action.payload
            }
        }

        case GET_SELECTED_SEATS: {
            return {
                ...state, seats: action.payload
            }
        }

        case GET_DATA_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state, data : action.payload, isLoading : false
            }
        }
        case GET_DATA_FAILURE: {
            return {
                ...state, isLoading : false, isError : true, 
            }
        }
        case GET_FILTER_ITEMS: {
            return {
                ...state, isLoading : false, isError: false, bus_filters : [...action.payload]
            }
        }
        case GET_UPDATED_DATA: {
            return {
                ...state, isLoading : false, isError: false, data : [...action.payload]
            }
        }
        default:
            return state;
    }
} 

export {resultReducer}