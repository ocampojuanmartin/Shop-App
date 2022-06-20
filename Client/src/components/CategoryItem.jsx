import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
    position: relative;
    flex: 1;
    margin: 3px;
    height: 70vh;
    
`

const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    cursor: pointer;
`

const Info = styled.div`
    position: aboslute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    // display: flex;
    flex-direction: column; //   NOT WORKING
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
`

const Button = styled.button`
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem