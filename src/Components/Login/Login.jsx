import React from 'react';
import "./Login.css";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from "../../redux/auth-reduser"
import { Redirect } from 'react-router-dom';
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input )}
                {createField("Password", "password", [required], Input, {type: "password"} )}
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe" )}

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input)} 


            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    //unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (FormData) => {
        props.login(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);





