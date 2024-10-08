import '/App.css'
import { MyFirstComponent } from './component/MyfirstComponent'

function App() {

export const MyFirstComponent = () => {

  const name = "Ines Maria Oliveros";

  const github_profile ="https://github.com/ngarcia1994/AlejandroGarcia";

  const student = {
    name: "Diana ",
    last_name: "Arévalo ",
    mobile: "300000000",
    linkedinProfile: ""
};

  return {(
    <>
    <div>MyFirstComponent</div>
    <div className="container bg-info-subtle mt-4">
    <h1>Temas de react</h1>
    <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados Hooks</li>
        <li>Props</li>
    </ul>
    </div>
    <div className="container bg-info-subtle py-2">
      <h1>Datos del Docente</h1>
      <p>Nombre: <strong>{ name }</strong></p>
    </>
  )
}

export default App