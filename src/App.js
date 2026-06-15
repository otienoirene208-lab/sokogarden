import './App.css';
import { BrowserRouter as Router,Routes,Route,link } from 'react-router-dom';
import Getproduct from './component/Getproduct';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Addproduct from './component/Addproduct';
import Notfound from './component/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import Makepayment from './component/Makepayment';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Sokogarden buy and sell online</h1>
      </header>

      <Routes>
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/signin'element={<Signin/>}/>
        <Route path='/addproduct'element={<Addproduct/>}/>
        <Route path='/makepayment'element={<Makepayment/>}/>
        <Route path='*'element={<Notfound/>}/>
        
      </Routes>

    </div>
    </Router>
  );
}

export default App;
