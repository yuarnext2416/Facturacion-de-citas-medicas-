import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Registro() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
<div style={{width: 1517, height: 1162, position: 'relative', border: '1px white solid'}}>
  <div style={{width: 277, height: 44, paddingLeft: 19.53, paddingRight: 19.53, paddingTop: 14.65, paddingBottom: 14.65, left: 619, top: 1012, position: 'absolute', background: '#04A7C3', borderRadius: 9.77, border: '0.98px black solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 25, fontFamily: 'Sofia Sans', fontWeight: '600', wordWrap: 'break-word'}}>Registrarme</div>
  </div>
  <div style={{width: 264, height: 18, left: 821, top: 313, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Numero celular </div>
  <div style={{width: 264, height: 18, left: 821, top: 472, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Sexo *</div>
  <div style={{width: 1400, height: 76, left: 0, top: 1, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 58.60, display: 'inline-flex'}}>
  <img src={`${process.env.PUBLIC_URL}/log2.png`} alt="logoprincipal" style={{ width: 77, height: 77 }} />
    <div style={{left: 89, top: 17, position: 'absolute', color: '#04A7C3', fontSize: 35.16, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Sistema de salud</div>
  </div>
  <div style={{width: 473, height: 57, left: 521, top: 106, position: 'absolute', color: '#04A7C3', fontSize: 48, fontFamily: 'Sofia Sans', fontWeight: '800', wordWrap: 'break-word'}}>Registro de pacientes </div>
  <div style={{width: 264, height: 18, left: 353, top: 313, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Nombre completo *</div>
  <div style={{width: 264, height: 18, left: 351, top: 472, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Fecha de nacimiento *</div>
  <div style={{width: 264, height: 18, left: 351, top: 393, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Apellido completo*</div>
  <div style={{ width: 344, height: 18, left: 820, top: 342, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="number" placeholder="Numero de celular" style={{ width: '100%' }} />
      </div>
  <div style={{ width: 344, height: 18, left: 351, top: 263, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <select style={{ width: '100%' }}>
          <option value="">--Seleccione Tipo de identificación--</option>
          <option value="documento">Tarjeta de identidad</option>
          <option value="cedula">Cédula de ciudadanía</option>
          <option value="cedula">Pasaporte</option>
          <option value="extranjera">Cédula extranjera</option>
          <option value="extranjera">Carné Diplomático </option>
          <option value="extranjera">Salvoconducto</option>
          <option value="extranjera">Permiso Especial de Permanencia</option>
          <option value="extranjera">Permiso por Protección Temporal o Permiso Especial </option>
          <option value="extranjera">Permiso Temporal </option>
          
          
        </select>
      </div>
  <div style={{width: 344, height: 18, left: 353, top: 234, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Tipo de identificacion*</div>
  <div style={{ width: 344, height: 18, left: 820, top: 263, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="number" placeholder="Digite Numero de identificación" style={{ width: '100%' }} />
      </div>
      <div style={{ width: 344, height: 18, left: 351, top: 342, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="text" placeholder="NOMBRE COMLETO" style={{ width: '100%' }} />
      </div>
  <div style={{width: 344, height: 18, left: 351, top: 424, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word'}}>
     <input type="text" placeholder="APELLIDO COMPLETO" style={{ width: '100%' }} />
  </div>
  <div style={{width: 264, height: 18, left: 820, top: 395, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Dirección *</div>
  <div style={{ width: 344, height: 18, left: 351, top: 504, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/aa"
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ width: 344, height: 18, left: 820, top: 506, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <select style={{ width: '100%' }}>
          <option value="">--Seleccione Tipo de Sexo--</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">No binario</option>
          <option value="otro">Género queer</option>
          <option value="otro">Transgénero</option>
          <option value="otro">Cisgénero</option>
          <option value="otro">Agénero</option>
          <option value="otro">Bigénero</option>
          <option value="otro">Pangénero</option>
          
        
        </select>
      </div>
  <div style={{width: 264, height: 18, left: 351, top: 553, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Cliente / Prestador * </div>
  <div style={{ width: 813, height: 18, left: 351, top: 584, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <select style={{ width: '100%' }}>
          <option value="">--Seleccione tipo de cliente--</option>
          <option value="contributivo">Afiliado al régimen contributivo</option>
          <option value="subsidiado">Afiliado al régimen subsidiado</option>
          <option value="vinculados">Afiliado vinculados</option>
          <option value="especiale">Afiliado especiale</option>
          <option value="beneficiarios">Beneficiarios</option>
          <option value="servicios">Cliente por servicios específicos</option>
          <option value="convenios">Cliente por convenios</option>
        </select>
      </div>
  <div style={{width: 344, height: 18, left: 822, top: 424, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word'}}>
  <input type="text" placeholder="Digite Dirección" style={{ width: '100%' }} />
  </div>
  <div style={{width: 264, height: 18, left: 351, top: 633, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Correo Electrónico *</div>
  <div style={{ width: 813, height: 18, left: 351, top: 664, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="email" placeholder="Correo electrónico" style={{ width: '100%' }} />
      </div>
  <div style={{width: 273, height: 18, left: 351, top: 714, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Confirme Correo Electrónico * </div>
  <div style={{ width: 813, height: 18, left: 351, top: 743, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="email" placeholder="Confirmar Correo Electrónico" style={{ width: '100%' }} />
      </div>
  <div style={{width: 264, height: 18, left: 351, top: 793, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Nueva Contraseña *</div>
  <div style={{ width: 813, height: 18, left: 351, top: 824, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="password" placeholder="Contraseña" style={{ width: '100%' }} />
      </div>
  <div style={{width: 279, height: 18, left: 351, top: 875, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Confirmar Nueva Contraseña * </div>
  <div style={{width: 344, height: 18, left: 820, top: 234, position: 'absolute', color: '#151E21', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '700', wordWrap: 'break-word'}}>Identificacion*</div>
 <div style={{ width: 813, height: 18, left: 351, top: 904, position: 'absolute', color: 'rgba(0, 56, 70, 0.50)', fontSize: 20, fontFamily: 'Sofia Sans', fontWeight: '500', wordWrap: 'break-word' }}>
        <input type="password" placeholder="Confirmar Contraseña" style={{ width: '100%' }} />
      </div>
</div>
 );
}

export default Registro;
