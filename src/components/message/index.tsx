import React, { FC } from "react"
import PanovSiri from "../panov-siri";
import cls from  './mystyles.module.scss';
interface Props {
    text:string
}
const Message:FC<Props> =({text=""})=> {
    return (
        <div className={cls.container}>
            <div className={cls.siri}>
                <PanovSiri />
            </div>
            <div className={cls.message+" "+cls.out}>
                <p className={cls.text}>{text}</p>
            </div>
        </div>
    )
}
export default Message