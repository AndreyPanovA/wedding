import cn from "classnames"
import React from "react"
import {TimeBlockInfo} from "../../components"
import cls from "./style.module.scss"
const Welcome =(props:any)=> {
    return (
        <div className={cn(cls.container)}>
            <h1>Приглашаем вас на нашу свадьбу!</h1>
            <div>
                <h2>Юрий Алексей,</h2>
                <h2>будем рады разделить с вами день нашей свадьбы!</h2>
            </div>
            <TimeBlockInfo />
            <p>Также просим вас заполнить анкету, чтобы мы смогли учесть ваши пожелания.  </p>
        </div>
    )
}
export default Welcome