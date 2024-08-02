import React, { useState } from 'react';
import Datos from '../../Datos.json';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';

function Filtro() {
  const [filtro, setFiltro] = useState('');
  const [mostrarMas, setMostrarMas] = useState(false);

  const handleFilterChange = (filter) => {
    setFiltro(filter);
    setMostrarMas(false); // Reinicia la vista de "Ver más" cuando cambie el filtro
  };

 
  const datosFiltrados = Datos.filter(dato => {
    if (!filtro) return true;
    return dato.personaje === filtro;
  });

  // Limitar los datos a mostrar 6 por defecto
  const datosAMostrar = mostrarMas ? datosFiltrados : datosFiltrados.slice(0, 8);

  // Animación para el botón "Ver más"
  const handleMostrarMas = () => {
    setMostrarMas(true);
  };

  return (
    <div>
      <div className="filter-buttons">
        <Button className="filter-button" onClick={() => handleFilterChange('En Familia')}>
          En Familia
        </Button>
        <Button className="filter-button" onClick={() => handleFilterChange('Mamá')}>
          Mamá
        </Button>
        <Button className="filter-button" onClick={() => handleFilterChange('Carlos')}>
          Carlos
        </Button>
        <Button className="filter-button" onClick={() => handleFilterChange('Mauro')}>
          Mauro
        </Button>
        <Button className="filter-button" onClick={() => handleFilterChange('María')}>
          María
        </Button>
        <Button className="filter-button" onClick={() => handleFilterChange('Sola')}>
          Sola
        </Button>
      </div>
      <div className="container_data">
        {datosAMostrar.map(dato => (
          <LazyLoad key={dato.id} height={200} offset={100}>
            <motion.div
              className="card_data"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={dato.img} alt={dato.titulo} loading="lazy" />
              <h3>{dato.titulo}</h3>
              <p>{dato.descripcion}</p>
              <small>{dato.año}</small>
            </motion.div>
          </LazyLoad>
        ))}
      </div>
      {!mostrarMas && datosFiltrados.length > 6 && (
        <motion.div
          className="ver-mas-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: mostrarMas ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button className="ver-mas-button" onClick={handleMostrarMas}>
            Ver más
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default Filtro;
