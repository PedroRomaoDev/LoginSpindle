import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo (1).svg';
import logo2 from '../assets/Logo.svg';
import brFlag from '../assets/image 14.png';
import usFlag from '../assets/image 15.png';
import ajudaIcon from '../assets/Icon Ajuda.png';

const translations = {
  pt: {
    title: "Recuperar Senha",
    description: "Informe os dados para recuperar sua senha",
    emailLabel: "E-mail",
    cpfLabel: "CPF",
    recoverButton: "Recuperar Senha",
    backToLogin: "Voltar para o login",
    or: "ou",
    footer: "© 2024 Spin Engenharia. Todos os direitos reservados.",
  },
  en: {
    title: "Recover Password",
    description: "Enter the details to recover your password",
    emailLabel: "Email",
    cpfLabel: "CPF",
    recoverButton: "Recover Password",
    backToLogin: "Back to login",
    or: "or",
    footer: "© 2024 Spin Engenharia. All rights reserved.",
  },
};

export default function RecuperarSenha() {
  const [lang, setLang] = useState('pt');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();
  const t = translations[lang];

  const handleSubmit = () => {
    if (!email || !cpf) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    navigate('/email-enviado');
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
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu e-mail" />

          <label>{t.cpfLabel}</label>
          <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF" />

          <button onClick={handleSubmit}>{t.recoverButton}</button>

          <div className="or-text">{t.or}</div>

          <a href="/login">{t.backToLogin}</a>

          <div className="footer">{t.footer}</div>
        </div>
      </div>

      <div className="help-icon">
        <img src={ajudaIcon} alt="Ajuda" />
      </div>
    </>
  );
}
