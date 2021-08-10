import React from 'react'
import Home from '../index'
import { FormContent, Form, BottomText, FormInput, FormLabel, RegForm, RegTitle, RegWrapper, FormButton } from './RegisterElements';

const Register = () => {
    return (
        <>
            <Home />
            <RegWrapper>
                <RegForm>
                   <RegTitle>Create an account</RegTitle>
                    <FormContent>
                        <Form action = "#">
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type = 'email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type = 'password' required />
                            <FormButton type = 'submit'>Register</FormButton>
                            <BottomText to = "/login">Already have an account?</BottomText>
                            <BottomText>Forgot Password?</BottomText>
                        </Form>
                    </FormContent>
                </RegForm>
            </RegWrapper>
        </>
    )
}

export default Register
