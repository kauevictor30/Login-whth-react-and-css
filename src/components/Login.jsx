import './Login.css'

const Login = () => {
    const handleSumit = () => {
        e.preventDefault();
        console.log('Envio');
    }

    return (
        <div className='container'>
            <form onSubmit={handleSumit}>
                <img src="src/assets/wise.svg" alt="wise logo" />
                <div className="input-field">
                    <input 
                    type="email" 
                    placeholder='E-mail'
                    />
                </div>
                <div className="input-field">
                    <input 
                    type="password" 
                    placeholder='Senha'/>
                </div>
                <div className="recal-forget">
                    <label>
                        <input type="checkbox"/>
                        Lembre de mim
                    </label>
                    <a className="esqueci" href="https://www.instagram.com/gdevsociety/" target="blank">Esqueceu a senha?</a>
                </div>
                <a href="https://wise.com/br/" target="blank">
                    <button>Entrar</button>
                </a>
                <div className="signup-link">
                    Não tem uma conta? <a href="a">Registrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login 