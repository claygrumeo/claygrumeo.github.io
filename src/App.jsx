import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <div className="ContentWrapper">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
