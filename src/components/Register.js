import styled from "styled-components"
import image0 from "../assets/buttonExit.png"
import image1 from "../assets/add.png"
import image2 from "../assets/remove.png"
import axios from "axios";
import TransitionsEntraces from "./TransationsEntraces";
import TransitionsOutputs from "./TransitionsOutputs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Register() {
    const [transationsEnt, setTransationsEnt] = useState([])
    const [transationsOut, setTransationsOut] = useState([])

    const token = JSON.parse(localStorage.getItem('token'));
    let sum = 0;
    let subtract = 0;
    
    for (let i = 0; i < transationsEnt.length; i++) {
        let transform = Number(transationsEnt[i].value)
        console.log(transform);
        sum += transform;
        console.log(sum);

    }

    for (let i = 0; i < transationsOut.length; i++) {
        let transformOut = Number(transationsOut[i].value)
        console.log(transformOut)
        subtract += transformOut;
        console.log(subtract);

    }
    let balance = sum - subtract;

    useEffect(() => {
        const URL = `http://localhost:5000/entraces`;
        const promisse = axios.get(URL, {
            headers: { authorization: `Bearer ${token}` }
        });

        promisse.then((res) => {
            console.log(res.data)
            setTransationsEnt(res.data);

        }

        );
        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, []);

    useEffect(() => {
        const URL = `http://localhost:5000/outputs`;
        const promisse = axios.get(URL, {
            headers: { authorization: `Bearer ${token}` }
        });

        promisse.then((res) => {
            console.log(res.data)
            setTransationsOut(res.data);

        }

        );
        promisse.catch(() => console.log("Falha na requisição, tente novamente"));
    }, []);

    return (
        <Container>
            <MainContent>
                <Top><p>Ola, Fulano </p> <img src={image0} /></Top>

                <RegistersInOut><h1>Entradas</h1>{transationsEnt.map((t, index) => <TransitionsEntraces t={t} key={index} />)}
                    <h1>Saidas</h1>{transationsOut.map((t, index) => <TransitionsOutputs t={t} key={index} />)}
                    <Balance>SALDO</Balance> <Result balance={balance}>{balance.toFixed(2)}</Result>

                </RegistersInOut>

                <Buttons><Link to='/entrance'><button><img src={image1} /><h1>Nova entrada</h1></button></Link><Link to="/output"> <button> <img src={image2} /><h1>Nova saída</h1> </button> </Link></Buttons>

            </MainContent>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
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

const RegistersInOut = styled.div`
    margin-top: 22px;
    height: 446px;
    width: 326px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: relative;
 

    p{
        height: 46px;
        width: 180px;
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;
        color: #868686;
    }

h1{
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
}
`

const Buttons = styled.div`
margin-top: 13px;
margin-bottom: 16px;
width: 326px;
display: flex;
justify-content: space-between;


button{
    height: 114px;
    width: 155px;
    border-radius: 5px;
    border: none;
    background-color: #A328D6;
    position: relative;

}
h1{
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    
    text-align: left;
    color: #ffffff;
    height: 40px;
    width: 64px;

    margin-top: 32.56px;
}

img{
    position: absolute;
    top:10.56px;
    left: 9.56px;

}

`

const Balance = styled.div`
position: absolute;
bottom:10px;
left: 15px;

font-family: Raleway;
font-size: 17px;
font-weight: 700;
line-height: 20px;


`

const Result = styled.div`
font-family: Raleway;
font-size: 17px;
font-weight: 400;
line-height: 20px;

position: absolute;

right: 11px;
bottom: 10px;

color: ${(prop) => (prop.balance >= 0  ? '#03AC00' : '#C70000')};
    



`