import React from "react"
import cls from  './mystyles.module.scss';
const Message =(props:any)=> {
    return (
        <div className={cls.container}>
            <p className={cls.text}>cool</p>
        </div>
    )
}
export default Message