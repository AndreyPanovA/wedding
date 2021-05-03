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
const ChatBot:FC =(props:any)=> {
    return (
        <div className={cn(cls.container)}>
            {data.startConverssation.messages.map(({text},idx)=> <Message text={text}/>)}
            <div style={CUSTOM.center}>
                <Input />
            </div>
        </div>
    )
}
export default ChatBot