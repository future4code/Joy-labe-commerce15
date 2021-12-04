import React from "react";
import styled from "styled-components";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import Foguete from "../images/rocket.png"

const TesteFooter = styled.div`
    background-color: #83AEFB;
    bottom: 0;
    width:100%;
    display: flex;
    justify-content: center;
    color: #fff;
`
const EstiloFoguete = styled.img`
margin:10px 10px;
max-width: 50px;
`

export class Footer extends React.Component {

    render() {
        return(
            <TesteFooter>
                <EstiloFoguete src={Foguete} alt="logo" />
                <p>Criado por: Aline Paulino, Luana Fraporti e Pedro sekine</p>
                <ul>
                    <li>
                        <a href="https://pt-br.facebook.com/login.php">
                        <FaFacebook/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                        <FaInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/">
                        <FaLinkedin/>
                        </a>
                    </li>
                </ul>
            </TesteFooter>
        )
    }
}

// Aline, só comentei o seu código aqui porque tava dando erro, ok? 
// Tentamos encontrar esse erro e resolver tudo hoje!