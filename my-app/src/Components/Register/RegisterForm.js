import React, {useState} from 'react';
function RegistrationForm(props) {
    const [state , setState] = useState({
        usuario : "",
        email : "",
        password : "",
        confirmPassword: "",
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
   
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            alert('Ok, the password and confirmPassword are equals! ')    
        } else {
            alert('Passwords do not match');
        }
    }
    
    return(
        <div id="register" className="card col-12 col-xl-6 login-card mt-2 hv-center">
                <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputText1"><b>Usuário:</b></label>
                    <input type="text" 
                        className="form-control" 
                        id="usuario" 
                        placeholder="Digite seu usuário"
                        value={state.usuario}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1"><b>E-mail:</b></label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Digite seu e-mail"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1"><b>Senha:</b></label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1"><b>Confirme sua senha:</b></label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm