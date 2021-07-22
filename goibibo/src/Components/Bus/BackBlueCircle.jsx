import React from 'react'
import styled from "styled-components"

const StyleBlueCircle = styled.div`

width:89rem;
height: 80rem;
background-color: rgb(34,118,227);
position: absolute;
top: -53rem;
left: -69rem;
transform: translate(50%);
z-index: 2;
border-radius: 50%;
`

const StyleBlueCircleLight = styled.div`

width:95rem;
height: 86rem;
background-color: rgb(109,164,234);
position: absolute;
top: -58rem;
left: -76rem;
transform: translate(50%);
border-radius: 50%;
`

export const BackBlueCircle = () => {
    return (
        <>
       <StyleBlueCircle></StyleBlueCircle>
       <StyleBlueCircleLight />
</>
    )
}
