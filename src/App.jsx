import './App.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './component/Home'

function App() {

  const appName = "Product Hub !";
  const appDescription = "Discover and manage your products efficiently.";

  return (
    <>
      <Header appName={appName} appDescription={appDescription} />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
