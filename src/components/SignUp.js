import styled from "styled-components"
import FormSignUp from "./FormSignUp"
import { Link } from "react-router-dom"

export default function SignUp(){

    return(
        <Container>
            <Titulo>MyWallet</Titulo>
            <FormSignUp/>
            <Link to={`/`}><p>Já tem uma conta? Faça login!</p></Link>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;

background-color: #9056BF;
p{
    height: 18px;
    width: 230px;
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    position: absolute;
    top:500px;
    left:100px;
    color:#ffffff;
}
`

const Titulo = styled.div`
font-family: 'Saira Stencil One', cursive;
font-size: 32px;
font-weight: 400;
line-height: 50px;
text-align: left;
color:#ffffff;
display: flex;
justify-content: center;
align-items: center;

padding-top: 95px;

`