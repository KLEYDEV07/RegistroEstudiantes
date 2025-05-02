import { useState } from "react";
import ModalRegister from "./components/ModalRegister";

function App() {
  const [reportes, setReportes] = useState([]);
  const agregarEstudiante = (estudiante) => {


    reportes.push( estudiante );
    setReportes([...reportes]);
}
console.log(reportes);
return (
  <div className="container">
    <ModalRegister agregarEstudiante={agregarEstudiante} />
    {
      reportes.map((r,i)=>(
        <h1 key={i}>{r.nombre}</h1>
      ))
    }
  </div>
);

}

export default App;

