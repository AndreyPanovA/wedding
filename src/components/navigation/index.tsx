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
      <Route path="/" component={ChatBot}/>
      <Route path="/welcome" component={Welcome}/>
  </Router>
  )
}

export default connect(
    (state:any)=> {
      const {auth: {isAuth}}= state
      return {isAuth}
    },{setAuth}
  )(ChatBot)
