import './App.css';
import Inicio from './components/Inicio';
import Filtro from './components/Filtro';
import ImagenGrande from './components/ImagenGrande';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
   <> 
     <Inicio />
     <Filtro />
   </>
  );
}

export default App;
