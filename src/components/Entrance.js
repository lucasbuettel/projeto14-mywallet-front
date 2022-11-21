import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"


export default function Entrance() {

    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate();

    function newEntrace(e){
        e.preventDefault()

        const URL = "http://localhost:5000/entraces"

        const body = {
            value, description
        }
        
        console.log(body)
        const promisse = axios.post(URL, body)

        promisse.then((res) => {
            console.log(res.data)

            navigate("/register");

        })

        promisse.catch((err) => {
            alert(err.response.data.error)
            
        })

    }

    return (
        <Container>
            <MainContent>
                <Top><p>Nova entrada </p> </Top>

                <Form onSubmit={newEntrace}>
                    <div className="primeiro-input">
                        <input
                            id="value"
                            type="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Valor"
                            required />
                    </div>
                    <div className="segundo-input">
                        <input
                            id="description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição"
                            required
                        />
                    </div>
                    <div><button type="submit">{'Salvar entrada'}</button></div>
                </Form>
            </MainContent>

        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #9056BF;

display: flex;
justify-content: center;
`

const MainContent = styled.div`
margin-top: 25px;

`

const Top = styled.div`

width: 326px;

display: flex;
justify-content: space-between;


p{
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    
    color:#ffffff;
}

`

const Form = styled.form`
.primeiro-input{
    margin-top: 40px;
}

input{
    height: 58px;
    width: 326px;
    border-radius: 5px;
    
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    margin-bottom: 13px;
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