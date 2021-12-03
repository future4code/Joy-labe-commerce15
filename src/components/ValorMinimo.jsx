import React from "react";
import styled from "styled-components";

export class ValorMinimo extends React.Component {

    onChangeValorMinimo = (event) => {
        this.props.onChangeValorMinimo(event.target.value)
    }

    render(){
        return(
            <div>
                <input placeholder="Valor mínimo" type="number"  onChange={this.onChangeValorMinimo} value={this.props.valorMinimo}/>
            </div>
        )
    }
}