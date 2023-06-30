import React, { useState } from 'react'
import './01_MyForm.css'

const MyForm = ({user}) => {

  //6- controller input

  // 3- gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState('');
  const [role, setRole] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Enviando formulário");
    console.log(name, email, bio, role);
    
    {/** 7 - Resetando formulário */}
    setName('');
    setEmail('');
    setBio('');
  };

  return (
    <>
      {/* 5 - enviar o form */}
      {/* 1 - Criação do form */}
      <form onSubmit={handleSubmit} className='formulario'>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder='Digite o seu nome' value={name} onChange={handleName} />
            {console.log(name)}
          </div>
            {/* 2 - Label envolvendo input */}
          <div style={{margin:'10px 0 20px 0'}}>
            {/* 4 - Simplificação de manipulação de state */}
            <label>
              <span>E-mail:</span>
              <input type="email" name='email' placeholder='Digite o seu email' value={email} onChange={(event) => setEmail(event.target.value)}/>
              {console.log(email)}
            </label>
          </div>
          
          {/* 8- Criação do Textarea */}
          <div style={{marginBottom:'10px'}}>
            <label>
              <span>Bio:</span>
              <textarea name='bio'placeholder='Descrição do usuário' onChange={(event) => setBio(event.target.value)} value={bio}></textarea>
            </label>
          </div>
          
          {/* 9- Select */}
          <label>
            <span>Função do sistema</span>
            <select name='role' onChange={(event) => setRole(event.target.value)}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <input type='submit' value='Enviar'/>
      </form>   
    </>
  )
}

export default MyForm
