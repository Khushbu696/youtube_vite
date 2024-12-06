import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './components/Sidebar/sidebar.css'
import MainMenu from './components/MainMenu/MainMenu.jsx'
import './components/MainMenu/mainmenu.css'

function App() {

  return (
    <>
    <div className="container">
      <Sidebar/>
      <MainMenu/>
    </div>
    </>
  )
}

export default App
