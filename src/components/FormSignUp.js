import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import styled from "styled-components";

export default function FormSignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate();

    function signUp(e){
        e.preventDefault()

        const URL = "http://localhost:5000/signUp"

        const body = {
            name: name,
            email: email,
            password: password,
            checkPassword:checkPassword

        }
        
        console.log(body)
        const promisse = axios.post(URL, body)

        promisse.then((res) => {
            console.log(res.data)

            navigate("/");

        })

        promisse.catch((err) => {
            alert(err.response.data.error)
            
        })

    }


    return (
        <Container>
            <Form onSubmit={signUp}>
                <div className="primeiro-input">
                    <input
                        id="name"
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        required />
                </div>
                <div className="segundo-input">
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        required />
                </div>
                <div className="terceiro-input">
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                </div>
                <div className="quarto-input">
                    <input
                        id="checkPassword"
                        type="password"
                        value={checkPassword}
                        onChange={(e) => setCheckPassword(e.target.value)}
                        placeholder="Confirme a senha"
                        required
                    />
                </div>
                <div><button type="submit">{'Cadastrar'}</button></div>
            </Form>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const Form = styled.form`
    height: 160px;
    
    
div{
    margin-top: 9px;
    margin-bottom: 9px;
}

input {
    height: 58px;
    width: 326px;
    border-radius: 5px;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;

}

button{

    height: 46px;
    width: 326px;
    left: 23px;
    top: 375px;
    border-radius: 5px;
    background-color: #A328D6;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;  
    text-align: center;

    color: #ffffff;
}

`