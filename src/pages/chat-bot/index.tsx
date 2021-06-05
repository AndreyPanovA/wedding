import React, { FC,  useState } from "react";
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
        onGetPerson:async (person:any)=> {
            if(!person?.error) {
                setAuth(true)
              
                await setUserInfo(person)
                return history.push("/wellcome")
            }
            console.log("persson", person)
            setUserInfo(person)
            setState((prev:any)=>{
                let arr= [...prev, person]
                return (arr)
            })
           
            
       
        }
    }

    return (
        <div className={cn(cls.container)}>
            {data.startConverssation.messages.map(({text},idx)=> <div key={idx}><Message text={text} idx={idx}/></div>)}
            {state.map((el,idx)=> {
                return( 
                <div key={idx}>
                    <Message text={el.p} phone idx={idx}/>
                    <Message text={data.startConverssation.error} idx={idx}/>
                </div>)
            })}
            <div style={CUSTOM.center}>
                <Input onGetPerson={callbacks.onGetPerson}/>
            </div>
        </div>
    )
}


export default withRouter(connect(
    (state:any)=> {
      const {auth: {isAuth, userInfo}}= state
      return {isAuth,userInfo}
    },{setAuth,setUserInfo}
  )(ChatBot))
