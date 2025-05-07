import { useState } from "react";
import ModalRegister from "./components/ModalRegister";
import ListStudents from "./components/ListStudents";

function App() {
  const [reportes, setReportes] = useState([]);
  const agregarEstudiante = (estudiante) => {


    reportes.push( estudiante );
    setReportes([...reportes]);
}
return (
  <div className="container">
    <ModalRegister agregarEstudiante={agregarEstudiante} />
    <ListStudents reportes={reportes} />
  </div>
);

}

export default App;

