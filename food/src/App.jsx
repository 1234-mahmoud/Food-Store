import './App.css';
import Category from './components/Category';
import Header from './components/Header';
import Links from './components/Links';
import Products from './components/Products';
import Sale from './components/Sale';

function App() {
  return (
    <div className="App">
    <Header/>
    <Links/>
    <Sale/>
    <Category/>
    <Category/>
    <Products/>
    </div>
  );
}

export default App;
