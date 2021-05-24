import { userInfo } from "node:os";
import {batch} from "react-redux";
import ConstantType from "../constant-type";
// import API from "../../../../../Socol/Auto1/automate-mobile/src/axios"


const helper ={}
const {
    SET_TOKEN, SET_REFRESH_TOKEN, RESET_TOKENS, CHECK_COMPLETED, AUTH_SUCCESS, SET_CODEID, SET_MESSAGE,
    SET_IS_SUCCESS, SET_TOKEN_RG, SET_REFRESH_TOKEN_RG, SET_IS_PRELOAD,
    SET_PHONE_NUMBER, SET_PASSWORD, SET_FIO
} = ConstantType;

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
