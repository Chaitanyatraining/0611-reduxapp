import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Routing from './Routing/Routing';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routing />
     <Footer />
    </div>
  );
}

export default App;
