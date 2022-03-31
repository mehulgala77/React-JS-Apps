import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import PaginationDemo from './components/Pagination';
import APIDebounce from './components/APIDebounce/APIDebounce';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pagination' element={<PaginationDemo />} />
          <Route path='/api-debounce' element={<APIDebounce />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
