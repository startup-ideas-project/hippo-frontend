import {USER_AUTHENTICATED} from './user.types';

const INITIAL_STATE = {
    name: "",
    authenticated: false,
    user_id: "260e3372-afb9-479c-8c1a-bcd4d0e9a0ae",
    bearer_token: "",
    encode_public_key: `-----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA/AMzgI2gkwZfs85wYSKt
    HWWY1Z9Auh3Ah/hSYSAWXQb0izprJwXTb2jud5hdVdfnXL2+jJm8xVdHNf0CCzQE
    KKKHwUXt/a+Q9a9V+Kup5NJe5s9E5lBKN8TNWEleMFGy0dm2lSGCbLQ4bsRV81eZ
    ApR1nOeeFitmoN15q2pz3fxpnpByOvkTz9h+BANjYnNjnlGDSd2ThljZIqEwDoMl
    HCp4dDKOpIN2XX9q7b9N3ielHvuU5nhpAAZBZo4I7fB37w9+hM1KDyZ7F73HJrr8
    my3M1JDQCI8JhcoCY5y69KhcS7GjJf/tzZo4k9HKF+1/D0u+8Cxys2B7PFCU5x3a
    +oKtiLbStnHwRPbGNQdP07/2F9QWl7Ha6+Xrr97JL2v0bBy9KnR0TSNXxkX61E/6
    MCw5FRK7K9wL+Bjn7up3MQd0dSnVcK1bIrIJQeFV/a3lerKIieUCwMkN94/OMB4M
    mGoLBgslsr7yLP0MM+4MoWHKz31a6zQ3iiTL3aYAHr0CFtMZE3ZfEb2H69GGpO18
    Y983JNpRcTQWVDEfudXNlBK3P0cIba9LXXaiGC5ftnKBHp8fiW1jNZE6BSb68hoJ
    iqkT1FFjeSikggzWgTFjdZT8ooi1Z9j+1+8LLYNutt+0zhBrysbrwPSmFFVdc3dm
    ebtJKK7VkrHXqgP1nKGeo9ECAwEAAQ==
    -----END PUBLIC KEY-----`
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