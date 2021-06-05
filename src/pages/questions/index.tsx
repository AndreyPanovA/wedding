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
const Questions:FC<Props> =({isAuth,history,setAuth,setUserInfo,userInfo})=> {
    const [state, setState]=useState("")
    const callbacks = {
        onClick:(text:string)=>{
            setState(text)
        },
        goBack:()=>{
            history.goBack()
        }
      
    }

    return (
        <div className={cn(cls.container)}>
            <div onClick={callbacks.goBack} className={cls.goBack}>
                <p>{"<- назад" }</p>
            </div>
            {data.questionsPreview.messages.map(({text},idx)=> <Message text={text}/>)}
            <div className={cls.questions}>
                {data.questionsPreview.questions.quesstion.map(({text, answer}, idx)=>{
                    return (
                        <div className={cls.question} key={idx} onClick={callbacks.onClick.bind(this,answer)}>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
            <Message text={state}/>
      
        </div>
    )
}


export default withRouter(connect(
    (state:any)=> {
      const {auth: {isAuth, userInfo}}= state
      return {isAuth,userInfo}
    },{setAuth,setUserInfo}
  )(Questions))
