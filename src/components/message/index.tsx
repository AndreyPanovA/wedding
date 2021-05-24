import React, { FC } from "react"
import { FaCheck, FaRegTimesCircle } from "react-icons/fa";
import { RED } from "../../constants";
import PanovSiri from "../panov-siri";
import cls from  './mystyles.module.scss';
interface Props {
    text:string,
    phone?:boolean
}
const Message:FC<Props> =({text="",phone=false})=> {
    if(phone) {
        return (
             <div className={cls.container}>
                 <div className={cls.container} style={{marginBottom:20}}>
                    <div className={cls.inputContainer} >
                        <p>{text}</p>
                    </div>
                    <FaRegTimesCircle color={RED} size={20}/>
                 </div>
            </div>
        )
    }
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