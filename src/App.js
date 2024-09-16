


import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Faq from './components/FAQ/Faq';
import Last from './components/Last/Last';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About/>
      <Faq/>
      <Last/>
      <Footer/>
    </div>
  );
}

export default App;
