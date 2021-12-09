import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Foguete from "../images/rocket.png";

const FooterContainer = styled.div`
  background-color: #83aefb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0rem 3rem;
`;
const EstiloFoguete = styled.img`
  max-width: 50px;
`;
const EstiloSocial = styled.div`
  margin: 8px;
  font-size: 25px;
  text-decoration: none;
`;

const LinkSocial = styled.a`
  text-decoration: none;
  color: black;
  margin: 0rem 1rem;
`;

export class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <EstiloFoguete src={Foguete} />

        <p>Criado por: Aline Paulino, Luana Fraporti e Pedro sekine</p>
        <EstiloSocial>
          <LinkSocial href="https://pt-br.facebook.com/login.php">
            <FaFacebook />
          </LinkSocial>

          <LinkSocial href="https://www.instagram.com/">
            <FaInstagram />
          </LinkSocial>

          <LinkSocial href="https://br.linkedin.com/">
            <FaLinkedin />
          </LinkSocial>
        </EstiloSocial>
      </FooterContainer>
    );
  }
}

// Aline, só comentei o seu código aqui porque tava dando erro, ok?
// Tentamos encontrar esse erro e resolver tudo hoje!
