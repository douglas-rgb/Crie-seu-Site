import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Template from './Pages/Template/Templates';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer'; // <--- Adiciona essa linha

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Template />
        <Contact />
      </main>
      <Footer /> 
    </>
  );
}

export default App;

