import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
