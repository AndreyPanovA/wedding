import React, { FC } from "react";
import { Input, Message } from "../../components";
import cls from "./style.module.scss";
import data from "../../data"
const ChatBot:FC =(props:any)=> {
    return (
        <div className={cls.container}>
            {data.startConverssation.messages.map(({text},idx)=> <Message text={text}/>)}
            <Input />
        </div>
    )
}
export default ChatBot