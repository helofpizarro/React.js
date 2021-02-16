import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
              
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
