import './App.css';
import BestSelling from './components/BestSelling';
import Category from './components/Category';
import Discount from './components/Discount';
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
    <Discount/>
    <BestSelling/>
    </div>
  );
}

export default App;
