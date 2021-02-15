import React, { Component } from "react"
import CardNota from "../CardNota"
import "./estilo.css"

export class ListasDeNotas extends Component{

    render(){
        return(
        <ul className="lista-notas">
            {Array.of("Trabalho","Trabalho","Estudos"). map((categoria, index) =>{
                return (
                    <li className="lista-notas_item" key = {index}>
                        
                    <CardNota/>
                   </li>
                )
            })}

           
        </ul>) 
    }
    
}

export default ListasDeNotas;