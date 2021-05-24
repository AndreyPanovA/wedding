import React, { FC, useEffect, useState } from "react";
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
import {setAuth,setUserInfo} from "../../redux/reducers/auth"
import { withRouter} from "react-router";
// Navigation
interface Props  {
    isAuth:boolean,
    history:any,
    setAuth:any,
    userInfo:any, 
    setUserInfo(obj:object):void


}
const ChatBot:FC<Props> =({isAuth,history,setAuth,setUserInfo,userInfo})=> {
    // useEffect(()=>{
    //     if (isAuth) {
    //         setTimeout(()=>{
    //             // history.push("/wellcome")
    //             history.push("/")
    //         },1000)
    //     }  
    // },[isAuth])
    const [state, setState]=useState<{p:string}[]>([])
    const callbacks = {
        onGetPerson:(person:any)=> {
            if(!person?.error) {
                setAuth(true)
                history.push("/wellcome")
                return setUserInfo(person)
            }
            setUserInfo(person)
            setState((prev:any)=>{
                let arr= [...prev, person]
                return (arr)
            })
           
            
       
        }
    }
console.log(state)
    return (
        <div className={cn(cls.container)}>
            {data.startConverssation.messages.map(({text},idx)=> <Message text={text}/>)}
            {state.map((el,idx)=> {
                return( 
                <>
                    <Message text={el.p} phone/>
                    <Message text={data.startConverssation.error}/>
                </>)
            })}
            <div style={CUSTOM.center}>
                <Input onGetPerson={callbacks.onGetPerson}/>
            </div>
            {}
        </div>
    )
}


export default withRouter(connect(
    (state:any)=> {
      const {auth: {isAuth, userInfo}}= state
      return {isAuth,userInfo}
    },{setAuth,setUserInfo}
  )(ChatBot))
