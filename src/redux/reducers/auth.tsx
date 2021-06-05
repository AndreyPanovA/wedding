
const SET_FIRST_ENTER ="auth/SET_FIRST_ENTER"
const SET_USER_INFO="auth/SET_USER_INFO"
const initialState = {
    access: '',
    refresh: '',
    token: null,
    isAuth: false,
    userInfo:{

    }
};
const auth = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_FIRST_ENTER: {
            return { ...state, ...action.payload };
        }
        case SET_USER_INFO: {
            return {...state,...action.payload}
        }
        default: {
            return state;
        }
    }
};
// Оперделяем первый вход или нет
export const setAuth = (isAuth = true) => ({ type: SET_FIRST_ENTER, payload: { isAuth } });
export const setTest= (test:any) => ({ type: SET_FIRST_ENTER, payload: { test } });

// 
export const putUserInfo = (userInfo:any) => ({ type: SET_USER_INFO, payload: { userInfo } });
export const setUserInfo = (userInfo:any) => async (dispatch:any, getState:any) => {
    dispatch(putUserInfo(userInfo))
};




export default auth
