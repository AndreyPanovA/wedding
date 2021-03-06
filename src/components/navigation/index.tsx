import React, { FC } from 'react';
// Pages
import {Welcome, ChatBot, Questions} from "../../pages"
// Redux
import {connect} from 'react-redux';
import {setAuth} from "../../redux/reducers/auth"
// Navigation
import {
  BrowserRouter as Router,
  
  Route,

} from "react-router-dom";
// Styles
import '../../App.scss';
interface Props {
    isAuth:boolean
}
const Navigation:FC<Props> =({isAuth})=> {
  return(
    <div className={`wrapper  ${isAuth && "activeBackground"}`}> 
      <Router>
          <Route path="/" exact component={ChatBot}/>
          <Route path="/wellcome" exact component={Welcome}/>
          <Route path="/questions" exact component={Questions}/>
      </Router>
    </div>
  )
}

export default connect(
    (state:any)=> {
      const {auth: {isAuth}}= state
      return {isAuth}
    },{setAuth}
  )(Navigation)
