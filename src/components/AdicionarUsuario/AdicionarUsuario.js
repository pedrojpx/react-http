import React, { useState } from 'react'

import './AdicionarUsuario.css'

function AdicionarUsuario() {
  const [nome/*variável de acesso a esse atributo do state */, setNome /*função(dispatch) de atualização*/] = useState(''/*valor inicial*/)
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = event => {
    event.preventDefault()

    const usuario = { nome, sobrenome, email }
    //identico à const usuario = { nome: nome, sobrenome: sobrenome, email: email}

    fetch('https://reqres.in/api/users', {
      method:'POST', //method default é get
      header:{'Content-Type': 'application/json'}, //informar o tipo de dado
      body: JSON.stringify(usuario) //usuario é um objeto javascript, esta função o converte para JSON
    })
    // Não precisa da parte de pegar dados da resposta pois os dados não 
    // são renderizados mais neste componente
      .then(resposta => {
        if (resposta.ok) {
          clearFields()
          alert('Usuário cadastrado com sucesso!')
        } else {
          alert('Houve algum erro no cadastramento do usuário')
        }
      })
  }

  function clearFields() {
    setNome('')
    setSobrenome('')
    setEmail('')
  }

  
  return (
    <div className="AdicionarUsuario">
      <h2>Adicionar Usuário</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={event => setNome(event.target.value)}
              required>
            </input>
          </div>
          <div className="Coluna">
            <label>Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={sobrenome}
              onChange={event => setSobrenome(event.target.value)}
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
              value={email}
              onChange={event => setEmail(event.target.value)}
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

export default AdicionarUsuario