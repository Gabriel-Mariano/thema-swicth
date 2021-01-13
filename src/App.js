import './App.css';

import Header from './components/header/header';
import Home from './components/home/home';
import MyContext from './components/contextAPI';

function App() {
  return (
    <MyContext>
      <Header/>
      <Home/>
    </MyContext>
  );
}

export default App;
