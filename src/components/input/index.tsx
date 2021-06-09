import React, { FC, useRef, useState } from "react";
import InputMask from 'react-input-mask';
// styles
import cn from "classnames"
import cls from "./style.module.scss"
// interfaces
import {InputTarget} from "../../interfaces"
// icons
import { FaRegTimesCircle, FaTelegram, FaSms } from 'react-icons/fa';
import { GREEN, PINK, RED } from "../../constants";
import data from "../../data"
interface InputProps {
    onGetPerson(val:any):void
}
const Input:FC<InputProps> =({onGetPerson})=> {
    const [state, setState]=useState("")
    const callbacks ={
        // :InputTarget
        onClick:()=> {
            let val=state.split(" ").join("").split("-").join("").split("(").join("").split(")").join("").split("+7").join("")
            if(val.length===10) {
                let person=data.phones.filter(el=>el.p==="+7".concat(val) || el.ph==="+7".concat(val))
                if(person.length>0) {
                    onGetPerson(person[0])
                }else {
                    onGetPerson({error:"Нет такого пользователя", p:state})
                    setState("")
                }
            } 
        },
        onChangeText1:(event:any)=> {
            let value=event.target.value
            let val=value.split(" ").join("").split("-").join("").split("(").join("").split(")").join("").split("+7").join("")
            setState(val)
            
            // if(val.length===10) {
            //     let person=data.phones.filter(el=>el.p==="+7".concat(val) || el.ph==="+7".concat(val))
            //     if(person.length>0) {
            //         onGetPerson(person[0])
            //     }else {
            //         onGetPerson({error:"Нет такого пользователя", p:value})
            //         setState("")
            //     }
            // }          
        },
        onChangeText:(event:any)=>{
            let value=event.target.value
            let val=value.split(" ").join("").split("-").join("").split("(").join("").split(")").join("").split("+7").join("")
            let num = `+7 (${val.substring(0, 3)})-${val.substring(3, 6)}-${val.substring(6, 8)}-${val.substring(8, 10)}`;
            num = num.trim();
            setState(num)
            if(val.trim().length===10) {
                let person=data.phones.filter(el=>el.p==="+7".concat(val) || el.ph==="+7".concat(val))
                if(person.length>0) {
                    onGetPerson(person[0])
                }else {
                    onGetPerson({error:"Нет такого пользователя", p:value})
                    setState("")
                }
            } 
        },
        del:(event:any)=>{
            if(event.keyCode===8) {
                setState(prev=>(""))
            }
             
         }
    }
  
    const auth=false
    const obj:any={}
    let refer=useRef(null)
    return (
        <div className={cls.container}>
            <label htmlFor="phone">Введите номер телефона ниже</label>
            <div className={cn(cls.inputContainer)}>
                <InputMask 
                    // ref={ref}
                    ref={refer}
                    // inputRef={ref}
                    id="phone"
                    mask="+7 ( 999 ) - 999 - 99 - 99" 
                    placeholder="+7 ( 999 ) - 999 - 99 - 99" 
                    className={cls.input}
                    onChange={callbacks.onChangeText1}
                    maskChar={" "} 
                    {...obj} 
                    value={state}
                    />
                    {/* <input id="phone" ref={refer}
                  
                    
                    // data-inputmask="'mask': '9999 9999 9999 9999'"
                    type="text"
                    
                    
                    placeholder="+7 ( 999 ) - 999 - 99 - 99"  value={state} onKeyDown={callbacks.del}  onChange={callbacks.onChangeText} className={cls.input}/>
                     */}
                {auth ? <FaRegTimesCircle color={RED} size={20}/> :
                <div onClick={callbacks.onClick} className={cls.send}> <FaSms  color={PINK} size={25}/></div>}
               
            </div>
        </div>
    )
}
export default Input