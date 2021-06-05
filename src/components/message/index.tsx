import React, { FC } from "react"
import { FaRegTimesCircle } from "react-icons/fa";
import { RED } from "../../constants";
import PanovSiri from "../panov-siri";
import cls from  './mystyles.module.scss';
interface Props {
    text:string,
    phone?:boolean,
    idx:any
}
const Message:FC<Props> =({text="",phone=false, idx})=> {
    if(phone) {
        return (
             <div className={cls.container} key={idx}>
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
        <div className={cls.container} key={idx}>
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