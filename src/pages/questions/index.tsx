import React, { FC,  useState } from "react";
// Components
import { Message } from "../../components";
// Styles
import cls from "./style.module.scss";
import cn from "classnames";
// mockData
import data from "../../data"
// Constants
// import {CUSTOM} from "../../constants"
// Redux
import {connect} from "react-redux"
import {setAuth,setUserInfo} from "../../redux/reducers/auth"
import { withRouter} from "react-router";
import { FaRegTimesCircle, FaTelegram, FaSms, FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import { PINK } from "../../constants";

// Navigation
interface Props  {
    isAuth:boolean,
    history?:any,
    setAuth?:any,
    userInfo?:any, 
    setUserInfo(obj:object):void


}
const Questions:FC<Props> =({history})=> {
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
                <p style={{display:"flex", alignItems:"center"}}> <FaArrowLeft color={PINK} />{"Назад" }</p>
            </div>
            {data.questionsPreview.messages.map(({text},idx)=> <div key={idx}><Message text={text} idx={idx}/></div>)}
            <div className={cls.questions}>
                {data.questionsPreview.questions.quesstion.map(({text, answer}, idx)=>{
                    return (
                        <div className={cls.question} key={idx} onClick={callbacks.onClick.bind(this,answer)}>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
            {state && <Message text={state} idx={"cool"} />}
        </div>
    )
}


export default withRouter(connect(
    (state:any)=> {
      const {auth: {isAuth, userInfo}}= state
      return {isAuth,userInfo}
    },{setAuth,setUserInfo}
  )(Questions))
