import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/about/About';
import ProductList from "./components/productList/ProductList";
import Certs from './components/Certs/Certs'
import Job from './components/Job/Job';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Intro/>
      <About/>
      <Certs/>
      <Job/>
      <ProductList/>
      </header>
    </div>
  );
}

export default App;
