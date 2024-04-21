import React from 'react';
//import { Link } from 'react-router-dom';
import '../css/homeComponent.css'

const HomeComponent: React.FC = () => {
  return (
    <div className="home-container">  
      <div className='home-logo'>
        <img src="../../public/img/logoUTM.jpeg" alt="" width="220" height="220" />
        <h1>Biblioteca Universitaria</h1>
      </div>
      
      <div className='home-menuImgOpciones'>
        <img src="../../public/img/nuevoUsuario.png" alt="" width="100" height="100" />
        <img src="../../public/img/buscar.png" alt="" width="100" height="100" />
        <img src="../../public/img/nuevaRevista.png" alt="" width="100" height="100" />
        <img src="../../public/img/prestamos.png" alt="" width="100" height="100" />
      </div>
      
      <div className='home-menuNameOpciones'>
        <div className='hmno'><h2> Nuevo usuario</h2></div>
        <div className='hmno'><h2> Buscar</h2></div>
        <div className='hmno'><h2> Agregar</h2></div>
        <div className='hmno'><h2> Préstamos</h2></div>
      </div>
      

      {/* <p>Este es el sistema de gestión de tu biblioteca.</p>
      <Link to="/libros" className="home-link">Ir a la Gestión de Libros</Link> */}

    </div>
  );
};

export default HomeComponent;