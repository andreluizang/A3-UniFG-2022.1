import React, { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if(email !== "" && password !== ""){
      console.log(email)
      console.log(password)
      console.log(confirmPassword)
      if(password==confirmPassword){
          alert("Cadastro realizado com sucesso!")
      }else{
          alert("As senhas não são iguais!")
      }
    }
    else{
      window.alert("Digite um email e/ou senha")
    }
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Cadastre-se!</span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? "has-val input" : "input"} 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? "has-val input" : "input"} 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={confirmPassword !== "" ? "has-val input" : "input"} 
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme sua senha"></span>
            </div>

            <div className="link-register">
              <span className="txt1">Já tem uma conta?</span>

              <a className="txt2" href="#">Faça login!</a>
            </div>

            <div className="container-login-form-btn">
              <button 
              className="login-form-btn" 
              onClick={handleSubmitClick}
              >
                Registrar
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;