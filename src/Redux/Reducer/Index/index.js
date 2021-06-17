import Type from '../../ActionTypes/Index'

const LoginStatus = {
    loginData: {},
}


export const reducerForLogin = (state = LoginStatus, action) => {
    switch (action.type) {
        case Type.Login:
            return {
                ...state, loginData: action.data,
            }
        case Type.Logout:
            return LoginStatus;
    }
    return state;
}