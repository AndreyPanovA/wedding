import React, { useState } from "react";
// import MaskedInput from 'react-text-mask'
import InputMask from 'react-input-mask';
// styles
import cls from "./style.module.scss"
// interfaces
import {InputTarget} from "../../interfaces"
const Input =(props:any)=> {
    const [state, setState]=useState("")
    const callbacks ={
        onChangeText:({target:{value}}:InputTarget)=> {
            console.log(value)           
        }
    }
    return (
        <div className={cls.container} >
            <label htmlFor="phone">Введите номер телефона ниже</label>
            <InputMask 
                id="phone"
                {...props} 
                mask="+7 (999)-999-99" 
                maskChar=" " 
                placeholder="+7 (999)-999-99" 
                className={cls.input}
                onChange={callbacks.onChangeText}
                />
        </div>
    )
}
export default Input