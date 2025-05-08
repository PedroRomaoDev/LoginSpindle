import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo (1).svg';
import logo2 from '../assets/Logo.svg';
import brFlag from '../assets/image 14.png';
import usFlag from '../assets/image 15.png';
import ajudaIcon from '../assets/Icon Ajuda.png';

const translations = {
  pt: {
    title: "Email Enviado",
    message: "Enviamos um email para *********@gmail.com com um link de recuperação da sua conta.",
    instructions: "Por favor, verifique sua caixa de entrada e siga as instruções.",
    thanks: "Obrigado!",
    backButton: "Voltar ao Login",
    footer: "© 2024 Spin Engenharia. Todos os direitos reservados.",
  },
  en: {
    title: "Email Sent",
    message: "We sent an email to *********@gmail.com with a link to reset your account.",
    instructions: "Please check your inbox and follow the instructions.",
    thanks: "Thank you!",
    backButton: "Back to Login",
    footer: "© 2024 Spin Engenharia. All rights reserved.",
  },
};

export default function EmailEnviado() {
  const [lang, setLang] = useState('pt');
  const navigate = useNavigate();
  const t = translations[lang];

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

          <h2 style={{ color: "#6b69d6", fontSize: "28px" }}>{t.title}</h2>
          <p style={{ marginTop: "20px" }}>{t.message}</p>
          <p style={{ marginTop: "10px" }}>{t.instructions}</p>
          <p style={{ marginTop: "10px" }}>{t.thanks}</p>

          <br />

          <button onClick={() => navigate('/login')}>{t.backButton}</button>

          <div className="footer">{t.footer}</div>
        </div>
      </div>

      <div className="help-icon">
        <img src={ajudaIcon} alt="Ajuda" />
      </div>
    </>
  );
}
