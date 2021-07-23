import { BOOKING_DATA } from "./ActionType"

export const formData = (payload) => {

    return {
        type:BOOKING_DATA,
        payload
    }

}