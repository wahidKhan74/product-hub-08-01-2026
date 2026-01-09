import './App.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './component/Home'
import InlineStyle from './component/style/InlineStyle'
import ModuleStyle from './component/style/ModuleStyle'
import ComponentStyle from './component/style/ComponentStyle'
import CondionalStyle from './component/style/ConditionalStyle'

function App() {

  const appName = "Product Hub !";
  const appDescription = "Discover and manage your products efficiently.";

  return (
    <>
      <Header appName={appName} appDescription={appDescription} />
      <Navbar />
      {/* <Home /> */}

      <InlineStyle />
      <ModuleStyle />
      <ComponentStyle />
      <CondionalStyle isHighlighted={true} />
      <Footer />
    </>
  )
}

export default App
