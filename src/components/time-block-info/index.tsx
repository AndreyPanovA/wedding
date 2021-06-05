
import React, { FC } from "react"
// Styles
import cls from "./style.module.scss"
import cn from "classnames"
import { IoCalendarOutline } from "react-icons/io5"
import {WiTime4} from "react-icons/all"

import { CUSTOM, GREY } from "../../constants"
interface Props {
    hours?:number | string, 
    minutes?:number | string,
    mounth?:number | string,
    year?:number | string, 
    type?:"date" |"text"| "time",
    title?:{
        top?:string,
        bottom?:string
    },
    href?:string
}
const TimeText:FC<Props> = ({hours="17", minutes="00", mounth="07",year="2021", type="time", title, href="https://yandex.ru/maps/-/CCUaNRQ~GC"})=> {
    const Icon =type=="date" ? IoCalendarOutline :type=="time" ? WiTime4:WiTime4
    return (
        <div className={cn(cls.timeContainer)} >
            <div className={cls.icon}>
                <Icon color={GREY} size={35}/>
            </div>
                {type=="text" ? 
                <div className={cn(cls.small)}>
                    <h3>{title?.top}</h3>
                    <a href={href} className={cls.a}>{title?.bottom}</a>
                </div>
                :
                <div className={cn(cls.timeContainer)}>
                        <h2>{hours}</h2>
                        <div>
                            {type=="date" ? 
                            <>
                                <p>{mounth}</p>
                                <p>{year}</p>
                            </>:
                            <h2>{`:${minutes}`}</h2>}
                        </div>
                </div>
                }
        </div>
    )
}
const TimeBlockInfo =()=> {
    return (
        <div>
            <div className={cn(cls.container)}>
                <TimeText type="date"/>
                <TimeText hours={11} />
                <TimeText type="text" title={{top:"Башня “Око”, Ресторан “Birds”", bottom:"Москва, Первый Красногвардейский проезд, дом 21 стр. 2"}} 
                    href="https://yandex.ru/maps/-/CCUaNRQ~GC"
                />
            </div>
            <div className={cn(cls.container)}>
                <TimeText type="date" hours={18} />
                <TimeText hours={15}  />
                <TimeText type="text" title={{top:"Загородный дом “Fisherix”", bottom:"Москва, Посёлок “Щаповское”, улица Евгения Родионова, вл. 7, ГК “Fisherix”"}} 
                href="https://yandex.ru/maps/-/CCUaNRWR8D"
                />
            </div>
        </div>
    )
}
export default TimeBlockInfo