import React, { useState } from 'react';
import logo1 from '../assets/logo (1).svg';
import logo2 from '../assets/Logo.svg';
import brFlag from '../assets/image 14.png';
import usFlag from '../assets/image 15.png';
import ajudaIcon from '../assets/Icon Ajuda.png';

const translations = {
  pt: {
    title: "Acesse sua conta",
    description: "Informe seus dados de acesso",
    emailLabel: "E-mail",
    passwordLabel: "Senha",
    rememberMe: "Lembrar-me",
    forgotPassword: "Esqueceu a senha?",
    loginButton: "Entrar",
    or: "ou",
    footer: "© 2024 Spin Engenharia. Todos os direitos reservados.",
  },
  en: {
    title: "Access your account",
    description: "Enter your login credentials",
    emailLabel: "Email",
    passwordLabel: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    loginButton: "Login",
    or: "or",
    footer: "© 2024 Spin Engenharia. All rights reserved.",
  },
};

export default function Login() {
  const [lang, setLang] = useState('pt');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const t = translations[lang];

  const handleLogin = () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Login realizado com sucesso!"); // Simulação
  };

  return (
    <>
      <div className="container">
        <div className="left-section">
          <div className="logo">
            <img src={logo1} alt="SPINDLE Logo" />
            <img src={logo2} alt="SPIN Logo" />
          </div>
        </div>

        <div className="form-container">
          <div className="accessibility">
            <img src={brFlag} alt="BR" onClick={() => setLang('pt')} />
            <img src={usFlag} alt="EN" onClick={() => setLang('en')} />
          </div>

          <h2>{t.title}</h2>
          <p>{t.description}</p>

          <label>{t.emailLabel}</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />

          <label>{t.passwordLabel}</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />

          <div className="login-options">
            <label>
              <input type="checkbox" /> {t.rememberMe}
            </label>
            <a href="/recuperar-senha">{t.forgotPassword}</a>
          </div>

          <button onClick={handleLogin}>{t.loginButton}</button>

          <div className="or-text">{t.or}</div>

          <div className="footer">{t.footer}</div>
        </div>
      </div>

      <div className="help-icon">
        <img src={ajudaIcon} alt="Ajuda" />
      </div>
    </>
  );
}
