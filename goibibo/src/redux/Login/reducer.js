import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./ActionType"


const loginstate={
    timeLoading:false,
    timeError:false,
    userAuth:false,
    userReg:false,
    username:"",
    cardnumber:"",
    phoneNumber:"",
    email:"",
    bag:[]
}

export const loginReducer=(state=loginstate,{type,payload})=>{
    switch(type){
      
        default:
            return state
    }

}