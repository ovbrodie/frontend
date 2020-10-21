import React, { Component } from 'react'
import Input from "../components/Input"
import {withTranslation} from "react-i18next"
import LanguageSelector from "../components/LanguageSelector"
import {login} from "../api/apiCalls"
import axios from "axios"
import ButtonWithProgress from "../components/ButtonWithProgress"
import { withApiProgress } from '../shared/ApiProgress'

class UserLoginPage extends Component {

    state = {
        username:null,
        password:null,
        error:null,
    }

    // componentDidMount(){
    //     axios.interceptors.request.use(request => {
    //         this.setState({
    //             pendingApiCall:true
    //         });
    //         return request;
    //     });

    //     axios.interceptors.response.use(response => {
    //         this.setState({
    //             pendingApiCall:false
    //         });
    //         return response;
    //     },
    //         error => {
    //             this.setState({pendingApiCall:false});
    //             throw error;
    //         }
    //     )
    // }

    onChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value,
            error:null
 
        })
    }

    onClickLogin = async (e) => {
        e.preventDefault()
        const {username,password} = this.state
        const creds = {
            username:username,
            password:password
        }
        this.setState({
            error:null
        })
        try{
        await login(creds)
        }
        catch(error){
            this.setState({
                error: error.response.data.message
            })
        }
    }

    render() {
        const {t, pendingApiCall} = this.props
        const buttonEnabled = this.state.username && this.state.password

        return (
            <div className="container">
                <form>
                    <h1 style={{textAlign:"center"}}>{t("Login")}</h1>
                    <Input label={t("Username")} name="username" type="text" placeholder={t("Username")} onChange={this.onChange}/>
                    <Input label={t("Password")}  name="password" type="password" placeholder={t("Password")} onChange={this.onChange}/>
                    {this.state.error &&
                    <div className="alert alert-danger" role="alert" style={{textAlign:"center"}}>
                        {this.state.error}
                    </div>
                    }
                    <div style={{display:"flex",justifyContent:"center"}}>
                    
                        <ButtonWithProgress style={{textAlign:"center"}} 
                                            onClick={this.onClickLogin} 
                                            pendingApiCall={pendingApiCall}
                                            disabled={!buttonEnabled || pendingApiCall} 
                                            text={t("Login")}
                        />                   
                        
                    </div>
                    <LanguageSelector/>
                </form>
            </div>
        )
    }
}

const UserLoginPageWithTranslation = withTranslation()(UserLoginPage)
export default withApiProgress(UserLoginPageWithTranslation, "/api/1.0/auth")

// const UserLoginPageWithApiProgress = withApiProgress(UserLoginPage, "/api/1.0/auth")
// const UserLoginPageWithTranslation = withTranslation()(UserLoginPageWithApiProgress);


// export default UserLoginPageWithTranslation;
