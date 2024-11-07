import { Portada } from "./components/Portada"
import { Padres } from "./components/Padres"
import { useLocation } from 'react-router-dom'
import { Iglesia } from "./components/Iglesia";
import { Fecha } from "./components/Fecha";
import { Fiesta } from "./components/Fiesta";
import { Tenida } from "./components/Tenida";
import Asistencia from "./components/Asistencia";
function App() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipoInv = queryParams.get('inv') === 'adultos' ? 'adultos':'jovenes';

  const nroLinea = tipoInv === 'adultos' ? '+595981059365' : '+595976956207'
 
  return (
    <>
      <Portada />
      <Fecha />
      {tipoInv === 'adultos' && ( <Padres/>)}
      <Iglesia/>
      <Fiesta/>
      <Tenida/>
      <Asistencia nroLinea={nroLinea} />
    </>
  )
}

export default App
