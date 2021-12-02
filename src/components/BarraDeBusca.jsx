import React from "react";
import styled from "styled-components";
import IconeLupa from '../images/search_black_24dp.svg'

const EstiloBarraDeBusca = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid;
    background-color: transparent;
    width: 30rem;
    outline: none;
    text-align: center;
`


export class BarraDeBusca extends React.Component {

    render() {
        return(
            <div>
                <EstiloBarraDeBusca />
                <img src={IconeLupa}/>
            </div>
        )
    }
}