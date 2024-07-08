import './App.css'
import Destaques from './componentes/Destaques/Destaques.tsx'
import EmBreve from './componentes/EmBreve/EmBreve.tsx'
import Demanda from './componentes/Demanda/Demanda.tsx'
import Recentemente from './componentes/Recentemente/Recentemente.tsx'

function App() {
  return (
    <div>
    <Destaques/>
    <EmBreve/>
    <Recentemente/>
    <Demanda/>
    </div>
  )
}

export default App
