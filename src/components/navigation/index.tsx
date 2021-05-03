import React, { FC } from 'react';
// Pages
import {Welcome, ChatBot} from "../../pages"
// Redux
import {connect} from 'react-redux';
import {setAuth} from "../../redux/reducers/auth"
// Navigation
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Styles
import '../../App.scss';
interface Props {
    isAuth:boolean
}
const Navigation:FC<Props> =({isAuth})=> {
  return(
  <Router>
      <Route path="/" exact component={ChatBot}/>
      <Route path="/wellcome" exact component={Welcome}/>
  </Router>
  )
}

export default connect(
    (state:any)=> {
      const {auth: {isAuth}}= state
      return {isAuth}
    },{setAuth}
  )(Navigation)
