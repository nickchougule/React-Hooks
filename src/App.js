import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
import UseContextLinked from './components/UseContextLinked';

function App() {
  return (
    <div className="App">
      <UseState/>
      <UseEffect/>
      <UseContext/>

    </div>
  );
}

export default App;
