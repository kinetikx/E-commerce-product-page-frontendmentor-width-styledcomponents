import React from 'react'
import Styled from "styled-components"
import Productdetails from './Productdetails/Productdetails'
import Productimages from './Productimages/Productimages'

const Product = () => {

    const Productpage= Styled.div`
    display:flex;
    flex-direction:row;
    gap:80px;
    margin-top:40px;
    padding: 0 24px;    
    `

    return (
    <Productpage>
    <Productimages/>
    <Productdetails/>

    </Productpage>
  )
}

export default Product