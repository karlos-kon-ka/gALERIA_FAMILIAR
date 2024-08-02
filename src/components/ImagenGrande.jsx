import React from 'react';
import { useParams } from 'react-router-dom';
import Datos from '../../Datos.json';

function ImagenGrande() {
  const { id } = useParams();
  const dato = Datos.find(dato => dato.id === id);

  if (!dato) {
    return <p>Imagen no encontrada</p>;
  }

  return (
    <div className="imagen-grande">
      <img src={dato.img} alt={dato.titulo} style={{ width: '100%', height: 'auto' }} />
      <h1>{dato.titulo}</h1>
      <p>{dato.descripcion}</p>
      <small>{dato.año}</small>
    </div>
  );
}

export default ImagenGrande;
