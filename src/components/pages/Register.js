import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {
    state = {
        form: {
            username: {
                type: 'text',
                value: '',
                validator: {
                    required: true,
                    minLength: 6,
                    maxLength: 15
                },
                error: { status: true, message: '' }

            },
            password: {
                type: 'password',
                value: '',
                validator: {
                    required: true,
                    minLength: 8,
                    maxLength: 25,
                },
                error: { status: false, message: '' }
            },
            email: {
                type: 'email',
                value: '',
                validator: {
                    required: true,
                },
                error: { status: false, message: '' }
            }
        }
    }

    checkValidator = (value, rules) => {
        let error = false;
        let errorMessage = '';
        if (rules.required) {
            if (value.length === 0) {
                error = true;
                errorMessage = `กรอกอันนี้ด้วนนะ`;
            }
        }

        if (!error && value.length < rules.minLength) {
            error = true;
            errorMessage = `please input password more than ${rules.minLength}`;
        }

        if (!error && value.length > rules.maxLength) {
            error = true;
            errorMessage = `please input password less than ${rules.maxLength}`;
        }
        return { status: error, message: errorMessage }
    }

    getClassName = name => {
        const form = this.state.form
        const errorStatus = form[name].error.status;
        return errorStatus ? "invalidFill" : null
    }

    onchangeFormValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let updateForm = { ...this.state.form };
        updateForm[name].value = value;
        const validatedResult = this.checkValidator(value, updateForm[name].validator)
        updateForm[name].error = {
            status: validatedResult.status,
            message: validatedResult.message,
        }
        this.setState({
            form: updateForm,
        })
    }

    onSubmitForm = event => {
        event.preventDefault();
        const form = this.state.form
        const formData = {};
        for (let name in form) {
            // console.log(form)
            formData[name] = form[name].value
            if(formData[name].error.status){
                return console.log(formData[name].error.status)
            }

        }
    }

    getErrorMessage = name => {
        const errorObject = this.state.form[name].error
        return errorObject.status ? errorObject.message : null
    }



    render() {

        return (
            <div>
                <form>
                    <div>
                        <label>User Name:</label>
                        <input className={this.getClassName("username")} type={this.state.form.username.type} name="username" onChange={this.onchangeFormValue} />
                        <div className="invalidFill">{this.getErrorMessage("username")}</div>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input className={this.getClassName("password")} type={this.state.form.username.type} name="password" onChange={this.onchangeFormValue} />
                        <div className="invalidFill">{this.getErrorMessage("password")}</div>
                    </div>
                    <div>
                        <label>email:</label>
                        <input className={this.getClassName("email")} type={this.state.form.username.type} name="email" onChange={this.onchangeFormValue} />
                        <div className="invalidFill">{this.getErrorMessage("email")}</div>
                    </div>
                    <div>
                        <button onClick={this.onSubmitForm}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
