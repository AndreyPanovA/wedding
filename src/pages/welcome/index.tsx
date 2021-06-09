import cn from "classnames"
import React, { FC } from "react"
import {PanovSiri, TimeBlockInfo} from "../../components"
import cls from "./style.module.scss"
import images from "../../assets"
// Redux
import {connect} from "react-redux"
import {setAuth,setUserInfo} from "../../redux/reducers/auth"
import { withRouter} from "react-router";
interface WelcomeProps  {
    userInfo:any,
    history:any
}
const Welcome:FC<WelcomeProps> =({userInfo,history})=> {
    

    return (
        <div className={cn(cls.container)}>
            <div className={cls.topImageContainer}>
                    <img src={images.topLeft} className={cls.img} alt=""/>
                    <img src={images.topMiddle} className={cls.img} alt=""/>
                    <img src={images.topRight} className={cls.img} alt=""/>
            </div>
            <div className={cls.content}>
                <p className={cls.title}>Приглашаем вас на нашу свадьбу!</p>
                <div>
                    <h2>{`${userInfo.firstName} ${userInfo.lastName}, ${userInfo.status ? userInfo.status :""}`}</h2>
                    <h2>будем рады разделить с вами этот важныый день!</h2>
                </div>
                <TimeBlockInfo userInfo={userInfo} />
                <p>Просим вас заполнить анкету ниже, чтобы мы смогли учесть ваши пожелания.</p>
                <div className={cls.form}>
                    <a href="https://forms.gle/G8vCG8oC79BCgdyZ6" >Нажми меня</a>
                </div>
                <div className={cls.questionsContainer} >
                    <div className={cls.questionsContent} onClick={()=>{
                        history.push("/questions")
                    }}>
                        <div className={cls.siriQuestion}>
                            <PanovSiri />
                            <div className={cls.questionChat} onClick={()=>{
                                return null
                            }}>
                                <div className={cls.question}>
                                    <p>У вас остались вопросы?</p>
                                </div>
                                <div className={cls.question}>
                                    <p>Да, покажи список частых вопросов.</p>
                                </div>
                            </div>
                          
                            
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className={cls.bottomImageContainer}>
                    <img src={images.bottomLeft} className={cls.img} alt=""/>
                    <img src={images.bottomMiddle} className={cls.img} alt=""/>
                    <img src={images.bottomRight} className={cls.img} alt=""/>
            </div>
        </div>
    )
}

export default withRouter(connect(
    (state:any)=> {
      const {auth: {isAuth, userInfo}}= state
      return {isAuth,userInfo}
    },{setAuth,setUserInfo}
  )(Welcome))