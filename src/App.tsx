import Characters from "./pages/Characters";
import SingleCharacters from "./pages/SingleCharacters";
import GlobalStyle from './styles/global'

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
        <Routes>
          <Route path='/' element={ <Characters /> } />
          <Route path='/character/:id' element={ <SingleCharacters /> } />
      </Routes>
    </div>
  );
}

export default App;
