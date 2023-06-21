import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Novo usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nome de usuário</label>
          <input type="text" placeholder="Carolina" />
        </div>
        <div className="newUserItem">
          <label>Nome completo</label>
          <input type="text" placeholder="Carolina Smith" />
        </div>
        <div className="newUserItem">
          <label>E-mail</label>
          <input type="email" placeholder="carolina@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="Senha" />
        </div>
        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="+55 61 9123 4564" />
        </div>
        <div className="newUserItem">
          <label>Endereço</label>
          <input type="text" placeholder="Brasilia | BR" />
        </div>
        <div className="newUserItem">
          <label>Gênero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Homem</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Mulher</label>
          </div>
        </div>
        <button className="newUserButton">Criar</button>
      </form>
    </div>
  );
}
