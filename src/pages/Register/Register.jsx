import React from 'react'
import "./Register.scss"
const Register = () => {
  return (
    <div className='register'>
      <div className="Wrapper">
        <h1>Cadastrar</h1>
        <form>
          <input placeholder="Nome" />
          <input placeholder="Sobrenome" />
          <input placeholder="Nome de usuário" />
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
          <input placeholder="Confirme sua senha" />
          <agreement>Ao criar uma conta, concordo com o processamento dos meus dados pessoais de acordo com a <a className='link' href="/politic">POLÍTICA DE PRIVACIDADE</a>
          </agreement>
          <button><a className='link' href="/">CRIAR</a></button>
        </form>
      </div>
    </div>
  )
}

export default Register
