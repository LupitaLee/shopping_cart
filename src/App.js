
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
    <Header/>
    <div>
      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/cart" exact>
        <Cart/>
      </Route>

    </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
