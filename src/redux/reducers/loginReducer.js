import LOGIN_ADMIN from "../types/loginType"

const initialState = {
    token: localStorage.getItem('usertoken') || "",
    admin: null,
    isLogged: false,
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_ADMIN:
            localStorage.setItem('usertoken', action.payload.token)
            return ({
                admin: action.payload.username,
                token: action.payload.token,
                isLogged: true
            })
        default:
            return state
    }
    
}