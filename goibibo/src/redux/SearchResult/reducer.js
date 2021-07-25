import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

const init = {
    data : [],
    isLoading : false,
    isError : false
}

const resultReducer = (state = init, action) => {
    switch (action.type) {
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
                ...state, isLoading : false, isError : true
            }
        }
        default:
            return state;
    }
} 

export {resultReducer}