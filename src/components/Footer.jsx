import React from "react";
import styled from "styled-components";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import Foguete from "../images/rocket.png"

const TesteFooter = styled.div`
background-color: #83AEFB;
color: #ffffff;
display:flex;
justify-content: space-between;
align-items: center;
height: 4rem;
padding: 0rem 3rem;
`
const EstiloFoguete = styled.img`
margin:10px 10px;
max-width: 50px;
`
const EstiloSocial = styled.li`
display: inline-block;
margin: 8px;
font-size: 25px;
`
const EstiloFoguete = styled.img`
margin:10px 10px;
max-width: 50px;
`


export class Footer extends React.Component {

    render() {
        return(
            <TesteFooter>
                <EstiloFoguete src= {Foguete}/>

                <p>Criado por: Aline Paulino, Luana Fraporti e Pedro sekine</p>
                <EstiloSocial>
                        <a href="https://pt-br.facebook.com/login.php">
                        <FaFacebook/>
                        </a>

                        <a href="https://www.instagram.com/">
                        <FaInstagram/>
                        </a>
                
                        <a href="https://br.linkedin.com/">
                        <FaLinkedin/>
                        </a>
                </EstiloSocial>
            </TesteFooter>
        )
    }
}

// Aline, só comentei o seu código aqui porque tava dando erro, ok? 
// Tentamos encontrar esse erro e resolver tudo hoje!