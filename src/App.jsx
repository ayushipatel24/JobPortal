import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
     <Header/>
     <div className=' pt-18 ' >
     <Outlet/>
     </div>
     <Footer/>
    </>
  )
}

export default App
