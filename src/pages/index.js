import React from "react"
import styled from 'styled-components'
import {
  Container, Row, Col,
  Card, CardImg, CardBody, CardTitle, CardText
} from 'reactstrap'

import GroupTitle from '../components/GroupTitle'
import { Title } from '../components/Title'
import { Layout } from "../components/Layout"
import { CTAEmail } from "../components/CTAEmail"
import { Button } from '../components/Button'

import SEO from "../components/seo"

const StyledCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
`

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.lightSecondary};
  background-image: url(${require('../images/pattern-alto.png')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Inicial" />
    <StyledHeader className="pt-5 pb-5">
      <Container>
        <Row>
          <Col xs="12" className="text-center mb-1">
            <Title tag='h1' className="mx-auto">Vota Cidade</Title>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="text-center mt-1">
            <Title tag='h1' className="mx-auto">O site que te ajuda a escolher seu candidato(a) a vereador(a)</Title>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="text-center mt-3 mb-2">
            <Title tag="h3" color="darkGray" className="h4">É candidato(a) a vereador(a) nas cidades participantes? Responda às afirmações e garanta sua participação agora!</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mx-auto">
              <a href="https://app.vota.org.br">
                <Button block light bold size="lg" color="secondaryColor" name="subscribe" type="submit" style={{maxWidth: "640px", margin: "auto"}}>PARTICIPE AGORA</Button>
              </a>
            </div>
          </Col>
        </Row>
        <CTAEmail
          subtitle="É eleitor(a) nas cidades participantes? Inscreva-se para ser avisado quando o match com candidatos(as) estará disponível!"
        />
      </Container>
    </StyledHeader>
    <Container className="py-5">
      <GroupTitle
        title="como funciona"
        subTitle="Vamos mostrar uma lista de candidatos e candidatas que pensam parecido com você"
        className="mt-3 mb-5"
      />
      <Row noGutters>
        <Col md="6" xl="3" className="pr-md-2 pr-lg-3 pr-xl-2 mb-4 d-flex align-items-stretch">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/como-funciona.png')} alt="Como funciona" />
            <CardBody>
              <CardTitle><Title size="24px">Como funciona?</Title></CardTitle>
              <CardText>Você responderá um questionário de 30 perguntas, com questões variadas sobre políticas públicas como transporte, saneamento básico, drogas, etc.</CardText>
            </CardBody>
          </StyledCard>
        </Col>
        <Col md="6" xl="3" className="pl-md-2 pl-lg-3 px-xl-2 mb-4 d-flex align-items-stretch">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/afinidade.png')} alt="Afinidade" />
            <CardBody>
              <CardTitle><Title size="24px">Afinidade</Title></CardTitle>
              <CardText>Nós cruzaremos as suas respostas com os candidatos e candidatas cadastradas e te mostraremos quem pensa parecido com você!</CardText>
            </CardBody>
          </StyledCard>
        </Col>
        <Col md="6" xl="3" className="pr-md-2 pr-lg-3 px-xl-2 mb-4 d-flex align-items-stretch">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/quero-mais.png')} alt="Quero mais" />
            <CardBody>
              <CardTitle><Title size="24px">Quero mais!</Title></CardTitle>
              <CardText>Você poderá pesquisar e acessar o perfil de qualquer candidato ou candidata cadastrada para ver as respostas, comparar e tomar a sua decisão.</CardText>
            </CardBody>
          </StyledCard>
        </Col>
        <Col md="6" xl="3" className="pl-md-2 pl-lg-3 pl-xl-2 mb-4 d-flex align-items-stretch">
          <StyledCard>
            <CardImg top width="100%" src={require('../images/seguranca-dos-dados.png')} alt="Segurança dos Dados" />
            <CardBody>
              <CardTitle><Title size="24px">E os dados?</Title></CardTitle>
              <CardText>Nós nos preocupamos e respeitamos muito seus dados e por isso daremos a opção de responder o questionário de forma anônima.</CardText>
            </CardBody>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  </Layout >
)

export default IndexPage
