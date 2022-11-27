import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <div className="ContentWrapper">
        <Header />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
