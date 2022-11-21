import styled from "styled-components";

export default function TransitionsEntraces({t}){

    const { value, description} = t;

    const valueTofixed = parseFloat(value).toFixed(2);
    
    


    return(
        <AllEntrances>
            <Description>{description}</Description> <Value>{`R$${valueTofixed}`}</Value> 
        </AllEntrances>
    )
}

const AllEntrances = styled.div`
height: 16px;
width: 326px;
margin-left: 50px;
display: flex;
flex-wrap: wrap;


`

const Value = styled.div`
width: 163px;
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #03AC00


`
const Description = styled.div`
width: 163px;
font-family: 'Raleway', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 19px;

`
