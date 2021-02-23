import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

constructor(){
  super();
  this.titulo="";
  this.texto="";
}

  handlerMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value 
    
  }

  handlerMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault()
    evento.stopPropagation()
    console.log(`uma nova nota foi criada` + this.titulo + " " + this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        
        <input 
        type="text" 
        placeholder="Título"
        className="form-cadastro_input" 
        onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
        rows={15}
         placeholder="Escreva sua nota..."
         className="form-cadastro_input"
         onChange={this._handleMudancaTexto.bind(this)}
          />
        <button className="form-cadasro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;