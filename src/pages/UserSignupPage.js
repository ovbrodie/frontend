import React, { Component } from 'react';
import {signUp} from "../api/apiCalls"
import Input from "../components/Input"
import {withTranslation} from "react-i18next"
import ButtonWithProgress from "../components/ButtonWithProgress"
import { withApiProgress } from '../shared/ApiProgress';

class UserSignupPage extends Component {

    state = {
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null,
        errors:{}
    };

    onChange = e => {
      const {name,value} = e.target;
      const errors = {...this.state.errors}
      const {t} = this.props

      errors[name] = undefined
      if(name === "password" || name === "passwordRepeat"){
        if(name === "password" && value !== this.state.passwordRepeat){
          errors.passwordRepeat = t("Password mismatch")
        } else if(name === "passwordRepeat" && value !== this.state.password){
          errors.password = t("Password mismatch")
        } else {
          errors.passwordRepeat = undefined
        }
      }

      this.setState({
        [name]:value,
        errors
      })
    }

    onClickSignup = async e => {
      e.preventDefault();
      const {username,displayName,password} = this.state;

      const body = {
        username:username,
        displayName:displayName,
        password:password
      };

      try{
        const response = await signUp(body);
      } catch(error){
        if(error.response.data.validationErrors){
        this.setState({errors: error.response.data.validationErrors});
      }
      }


      /*
        signUp(body).then(response => {
          this.setState({pendingApiCall:false})
        }).catch(error => {
          this.setState({pendingApiCall:false})
        })
      */
    }

    

    render() {
      const { errors} = this.state;
      const {username, displayName, password, passwordRepeat} = errors;
      const {t, pendingApiCall} = this.props

        return (
          <div className="container">
            <form>
          <h1 style={{textAlign:"center"}}>{t("Sign Up")}</h1>
          <Input label={t("Username")} error={username} name="username" type="text" placeholder={t("Username")} onChange={this.onChange}/>
          <Input label={t("Displayname")} error={displayName} name="displayName" type="text" placeholder={t("Displayname")} onChange={this.onChange}/>
          <Input label={t("Password")} error={password} name="password" type="password" placeholder={t("Password")} onChange={this.onChange}/>
          <Input label={t("Password Repeat")} error={passwordRepeat} name="passwordRepeat" type="password" placeholder={t("Password")} onChange={this.onChange}/>
     
          <div style={{display:"flex",justifyContent:"center"}}>
          
          <ButtonWithProgress style={{textAlign:"center"}} 
                              onClick={this.onClickSignup} 
                              pendingApiCall= {pendingApiCall}
                              disabled={pendingApiCall || passwordRepeat !== undefined}
                              text={t("Sign Up")}             
          />

          </div>
         
            </form>
            
        </div>    
        )
    }
}


const UserSignupPageWithApiProgress = withApiProgress(UserSignupPage, "/api/1.0/users")
const UserSignupPageWithTranslation = withTranslation()(UserSignupPageWithApiProgress);


export default UserSignupPageWithTranslation;