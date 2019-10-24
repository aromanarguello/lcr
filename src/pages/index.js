import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Image = styled.img`
  margin: 10px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const TextContainer = styled.span`
  width: 80%;

  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`

const Text = styled.h1`
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="L.C.R" />
    <Image
      src="https://res.cloudinary.com/dzeqyvxo2/image/upload/v1571883639/logo_lab_dqaaa8.jpg"
      alt="logo-lab"
    />
    <TextContainer>
      <Text>
        ¡Bienvenidos! Actualmente estamos haciendo renovaciones en nuestro sitio
        web para mejorar su experiencia, disculpe cualquier inconveniente que le
        puede causar. Con el propósito de no interrumpir su día, le ofrecemos
        ver sus resultados aquí:
      </Text>
    </TextContainer>
  </Layout>
)

export default IndexPage
