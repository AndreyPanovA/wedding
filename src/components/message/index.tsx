import React, { FC } from "react"
import { FaRegTimesCircle } from "react-icons/fa";
import { RED } from "../../constants";
import PanovSiri from "../panov-siri";
import cls from  './mystyles.module.scss';
import cn from "classnames"
interface Props {
    text:string,
    phone?:boolean,
    idx:any,
    blue?:boolean,
    link?:boolean
}
const Message:FC<Props> =({text="",phone=false, idx, blue, link})=> {

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
            {/* cls.message+" "+cls.out */}
            <div className={cn(cls.message, cls.out, blue && cls.blue)}>
                {link ? <a className={cls.link}  href={"https://forms.gle/G8vCG8oC79BCgdyZ6"}> Ссылка на форму</a> : <p className={cls.text}>{text}</p>}
            </div>
        </div>
    )
}
export default Message