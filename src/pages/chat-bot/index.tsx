import React, { FC, useEffect } from "react";
// Components
import { Input, Message } from "../../components";
// Styles
import cls from "./style.module.scss";
import cn from "classnames";
// mockData
import data from "../../data"
// Constants
import {CUSTOM} from "../../constants"
// Redux
import {connect} from "react-redux"
import {setAuth} from "../../redux/reducers/auth"
import { withRouter, WithRouterProps } from "react-router";
// Navigation
interface Props  {
    isAuth:boolean,
    history:any

}
const ChatBot:FC<Props> =({isAuth,history})=> {
    useEffect(()=>{
        if (isAuth) {
            setTimeout(()=>{
                history.push("/wellcome")
            },1000)
        }  
    },[isAuth])
    return (
        <div className={cn(cls.container)}>
            {/* <h1>{JSON.stringify(isAuth)}</h1> */}
            {data.startConverssation.messages.map(({text},idx)=> <Message text={text}/>)}
            <div style={CUSTOM.center}>
                <Input />
            </div>
        </div>
    )
}


export default withRouter(connect(
    (state:any)=> {
      const {auth: {isAuth}}= state
      return {isAuth}
    },{setAuth}
  )(ChatBot))
