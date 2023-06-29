import ListCharacters from "./pages/ListCharacters";
import SingleCharacters from "./pages/SingleCharacters";
import SearchCharacters from "./pages/SearchCharacters";
import GlobalStyle from './styles/global'

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
        <Routes>
          <Route path='/' element={ <ListCharacters /> } />
          <Route path='/buscar-personagem' element={ <SearchCharacters /> } />
          <Route path='/character/:id' element={ <SingleCharacters /> } />
      </Routes>
    </div>
  );
}

export default App;
