import React, { FC, useState } from "react";
import InputMask from 'react-input-mask';
// styles
import cn from "classnames"
import cls from "./style.module.scss"
// interfaces
import {InputTarget} from "../../interfaces"
// icons
import { FaRegTimesCircle,FaCheck, FaChevronRight } from 'react-icons/fa';
import { GREEN, RED } from "../../constants";
import data from "../../data"
interface InputProps {
    onGetPerson(val:any):void
}
const Input:FC<InputProps> =({onGetPerson})=> {
    const [state, setState]=useState("")
    const callbacks ={
        onChangeText:({target:{value}}:InputTarget)=> {
            let val=value.split(" ").join("").split("-").join("").split("(").join("").split(")").join("").split("+7").join("")
            setState(val)
            if(val.length==10) {
                let person=data.phones.filter(el=>el.p=="+7".concat(val) || el.ph=="+7".concat(val))
                if(person.length>0) {
                   
                    onGetPerson(person[0])
                }else {
                    onGetPerson({error:"Нет такого пользователя", p:value})
                    setState("")
                }
            }          
        }
    }
  
    const auth=false
    const obj:any={}
    console.log("person[0]1",data.phones[1])
    return (
        <div className={cls.container}>
            <label htmlFor="phone">Введите номер телефона ниже</label>
            <div className={cn(cls.inputContainer)}>
                <InputMask 

                    id="phone"
                    mask="+7 ( 999 ) - 999 - 99 - 99" 
             
                    placeholder="+7 ( 999 ) - 999 - 99 - 99" 
                    className={cls.input}
                    onChange={callbacks.onChangeText}
                    maskChar={" "} 
                    {...obj} 
                    value={state}
                    />
                {!auth ?<FaCheck  color={GREEN} size={20}/> :
                <FaRegTimesCircle color={RED} size={20}/>}
               
            </div>
        </div>
    )
}
export default Input