import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [emailUsuario, setEmailUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <div style={{ width: 1512, height: 982, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
      <div style={{ width: '100%', height: 135, paddingLeft: 40, paddingRight: 40, paddingTop: 20, paddingBottom: 20, position: 'absolute', top: 0, background: '#F4FEFF', borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', alignItems: 'center' }}>
        <img src={`${process.env.PUBLIC_URL}/log2.png`} alt="logoprincipal" style={{ width: 84, height: 70 }} />
        <div style={{ color: '#04A7C3', fontSize: 36, fontFamily: 'Sofia Sans', fontWeight: '700', marginLeft: 20 }}>Sistema de salud</div>
      </div>

      <div style={{ width: 885, height: 195, left: 314, top: 344, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'flex' }}>
        <div style={{ width: 498, height: 59, paddingLeft: 20, paddingRight: 20, paddingTop: 15, paddingBottom: 15, left: 193, top: 263, position: 'absolute', background: '#04A7C3', borderRadius: 10, border: '1px solid black', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ color: 'white', fontSize: 25, fontFamily: 'Sofia Sans', fontWeight: '600' }} onClick={() => navigate('/Inicio')}>Ingresar</div>
        </div>

        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'flex' }}>
          <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
            <input
              type="text"
              value={emailUsuario}
              onChange={(e) => setEmailUsuario(e.target.value)}
              placeholder="Email o Usuario"
              style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '10px', border: '1px solid #003846', fontSize: '15px' }}
            />
          </div>
        </div>

        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'flex' }}>
          <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Contraseña"
              style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #003846', fontSize: '15px' }}
            />
          </div>
        </div>
      </div>

      <div style={{ left: 568, top: 753, position: 'absolute', cursor: 'pointer', color: '#003846', fontSize: 24, fontFamily: 'Sofia Sans', fontWeight: '400' }} onClick={() => alert('Funcionalidad no implementada')}>
        ¿Has olvidado tu Usuario/contraseña?
      </div>

      <div style={{ width: 288, height: 82, left: 612, top: 262, position: 'absolute', color: '#04A7C3', fontSize: 48, fontFamily: 'Sofia Sans', fontWeight: '800' }}>
        Iniciar sesión
      </div>

      <div style={{ left: 705, top: 809, position: 'absolute', cursor: 'pointer', color: '#04A7C3', fontSize: 24, fontFamily: 'Sofia Sans', fontWeight: '400' }} onClick={() => navigate('/registro')}>
        Registrarse
      </div>
    </div>
  );
}

export default Login;
