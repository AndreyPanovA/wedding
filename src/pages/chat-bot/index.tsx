import React, { FC } from "react";
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
const ChatBot:FC =(props:any)=> {
    return (
        <div className={cn(cls.container)}>
            <h1>{JSON.stringify(props.isAuth)}</h1>
            {data.startConverssation.messages.map(({text},idx)=> <Message text={text}/>)}
            <div style={CUSTOM.center}>
                <Input />
            </div>
        </div>
    )
}


export default connect(
    (state:any)=> {
      const {auth: {isAuth}}= state
      return {isAuth}
    },{setAuth}
  )(ChatBot)
