import {USER_AUTHENTICATED} from './user.types';

const INITIAL_STATE = {
    name: "",
    authenticated: false,
    user_id: "260e3372-afb9-479c-8c1a-bcd4d0e9a0ae"
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case USER_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
                name: action.payload.userName,
                token: action.payload.token
            }
        default: return state
    }
}

export default userReducer;