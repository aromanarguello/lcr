import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Image = styled.img`
  margin: 50px 0 50px 0;
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`

const TextContainer = styled.span`
  width: 80%;

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`

const Header = styled.h1`
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 0;
`
const Subheader = styled.h2`
  font-size: 1em;
  margin: 0;
  text-align: center;
`

const Number = styled.a`
  text-decoration: none;
  color: black;
  margin-top: 5px;
`

const Buttton = styled.a`
  background-color: #0181be;
  border-radius: 5px;
  width: 160px;
  height: 60px;
  color: white;
  font-size: 1.2em;
  letter-spacing: 1.2px;
  margin: 50px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
`

const IndexPage = () => {
  const handleLinkClick = () => {}

  return (
    <Layout>
      <SEO title="L.C.R" />
      <Image
        src="https://res.cloudinary.com/dzeqyvxo2/image/upload/v1571883639/logo_lab_dqaaa8.jpg"
        alt="logo-lab"
      />
      <TextContainer>
        <Header>
          ¡Bienvenidos! Actualmente estamos haciendo renovaciones en nuestro
          sitio web para mejorar su experiencia, disculpe cualquier
          inconveniente que le puede causar. Con el propósito de no interrumpir
          su día, le ofrecemos ver sus resultados en linea:
        </Header>
      </TextContainer>
      <Buttton href="https://www.clinsis.com/roman/">RESULTADOS</Buttton>
      <Subheader>
        Si tiene preguntas o quiere contactarnos directamente:
      </Subheader>
      <Number href="tel:‎2298-1434">+(505) 2298-1434</Number>
    </Layout>
  )
}

export default IndexPage
