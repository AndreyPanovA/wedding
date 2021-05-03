import React, { useState } from "react";
import InputMask from 'react-input-mask';
// styles
import cn from "classnames"
import cls from "./style.module.scss"
// interfaces
import {InputTarget} from "../../interfaces"
// icons
import { FaRegTimesCircle,FaCheck, FaChevronRight } from 'react-icons/fa';
import { GREEN, RED } from "../../constants";
const Input =(props:any)=> {
    const [state, setState]=useState("")
    const callbacks ={
        onChangeText:({target:{value}}:InputTarget)=> {
            console.log(value)           
        }
    }
    const auth=false
    return (
        <div className={cls.container}>
            <label htmlFor="phone">Введите номер телефона ниже</label>
            <div className={cn(cls.inputContainer)}>
                <InputMask 
                    id="phone"
                    {...props} 
                    mask="+7 (999)-999-99" 
                    maskChar=" " 
                    placeholder="+7 (999)-999-99" 
                    className={cls.input}
                    onChange={callbacks.onChangeText}
                    />
                {!auth ?<FaCheck  color={GREEN} size={20}/> :
                <FaRegTimesCircle color={RED} size={20}/>}
               
            </div>
        </div>
    )
}
export default Input