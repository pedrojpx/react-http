import React, { Component } from 'react'

import './AdicionarUsuario.css'

class AdicionarUsuario extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      usuario: { nome: '', sobrenome: '', email: '' } 
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    const { name, value } = event.target
    this.setState({ usuario: { ...this.state.usuario, [name]: value } })
  }

  onSubmitHandler(event) {
    event.preventDefault()

    const usuario = this.state.usuario

    fetch('https://reqres.in/api/users', {
      method:'POST', //method default é get
      header:{'Content-Type': 'application/json'}, //informar o tipo de dado
      body: JSON.stringify(usuario) //usuario é um objeto javascript, esta função o converte para JSON
    })
      .then(resposta => resposta.json())
      .then(dados => {
        console.log(dados)

        //BUGFIX: no tutorial não tem esse passo... não sei se a API mudou para não responder com uma cópia do objeto + id e sim só com o id ou se eu errei alguma coisa
        //dados = {...dados, nome: usuario.nome, sobrenome: usuario.sobrenome, email: usuario.email}
        dados.nome = usuario.nome
        dados.sobrenome = usuario.sobrenome
        dados.email = usuario.email

        this.setState({usuario: {nome: '', sobrenome: '', email: ''}}) //limpa o formulário
        this.props.adicionarUsuario(dados) //adiciona o usuário em Usuarios.js (a função adicionar dispara o setState)
      })
  }

  render() {
    return (
      <div className="AdicionarUsuario">
        <h2>Adicionar Usuário</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={this.state.usuario.nome}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Sobrenome</label>
              <input
                type="text"
                name="sobrenome"
                value={this.state.usuario.sobrenome}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.usuario.email}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Adicionar
        </button>
        </form>
      </div>
    )
  }
}

export default AdicionarUsuario