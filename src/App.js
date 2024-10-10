import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import OrderPage from './TableOrdering/Pages/Order/Order';
import MenuPage from './TableOrdering/Pages/Menu/Menu';
import MainPage from './TableTechs/Pages/Main/Main';
import HomePage from './TableTechs/Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/order' element={<OrderPage />}>
          <Route path='' element={<MenuPage />} />
        </Route>
        
        <Route path='/' element={<MainPage />}>
          <Route path='' element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
