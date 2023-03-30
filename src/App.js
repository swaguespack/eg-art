import React, {useState} from 'react';
import './App.css';

import Nav from './components/Navigation';
import GoogleLogin from './components/GoogleLogin';

function App() {

  // Testing navbar
  const [pages] = useState([
    {
      name: "home",
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  
  return (
    <div className="App">
      <Nav 
        class="App-nav"
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
      />
      <GoogleLogin></GoogleLogin>


    </div>
  );
}

export default App;
