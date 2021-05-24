import cn from "classnames"
import React from "react"
import {TimeBlockInfo} from "../../components"
import cls from "./style.module.scss"
import images from "../../assets"
const Welcome =(props:any)=> {
    return (
        <div className={cn(cls.container)}>
            <div className={cls.topImageContainer}>
                    <img src={images.topLeft} className={cls.img}/>
                    <img src={images.topMiddle} className={cls.img}/>
                    <img src={images.topRight} className={cls.img}/>
            </div>
           
            <div className={cls.content}>
                <h1>Приглашаем вас на нашу свадьбу!</h1>
                <div>
                    <h2>Юрий Алексей,</h2>
                    <h2>будем рады разделить с вами день нашей свадьбы!</h2>
                </div>
                <TimeBlockInfo />
                <p>Также просим вас заполнить анкету, чтобы мы смогли учесть ваши пожелания.  </p>
            </div>
            <div className={cls.bottomImageContainer}>
                    <img src={images.bottomLeft} className={cls.img}/>
                    <img src={images.bottomMiddle} className={cls.img}/>
                    <img src={images.bottomRight} className={cls.img}/>
            </div>
        </div>
    )
}
export default Welcome