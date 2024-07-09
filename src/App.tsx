import './App.css'
import Destaques from './componentes/Destaques/Destaques.tsx'
import EmBreve from './componentes/EmBreve/EmBreve.tsx'
import Demanda from './componentes/Demanda/Demanda.tsx'
import Recentemente from './componentes/Recentemente/Recentemente.tsx'
import Footer from './componentes/Footer/Footer.tsx'

function App() {
  return (
    <div>
    <Destaques/>
    <EmBreve/>
    <Recentemente/>
    <Demanda/>
    <Footer/>
    </div>
  )
}

export default App
