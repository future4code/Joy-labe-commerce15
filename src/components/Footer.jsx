import React from "react";
import styled from "styled-components";
// import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const TesteFooter = styled.div`
    background-color: #83AEFB;
    bottom: 0;
    /* position: absolute; */
    width:100%;
    display: flex;
    align-itens: center;
    justify-content: center;
    color: #fff;
`

export class Footer extends React.Component {

    render() {
        return(
            <TesteFooter>
                <p>Criado por: Aline Paulino, Luana Fraporti e Pedro sekine</p>
                <ul>
                    <li>
                        <a href="https://pt-br.facebook.com/login.php">
                        {/* <FaFacebook/> */}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                        {/* <FaInstagram/> */}
                        </a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/">
                        {/* <FaLinkedin/> */}
                        </a>
                    </li>
                </ul>
            </TesteFooter>
        )
    }
}

// Aline, só comentei o seu código aqui porque tava dando erro, ok? 
// Tentamos encontrar esse erro e resolver tudo hoje!