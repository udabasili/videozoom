import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {restApi} from './services/api'

function App() {

  const [state, setstate] = useState('')
  useEffect(() =>{
    async function getData (){
      restApi('/test',"get")
        .then((response) =>{
          console.log(response)
          setstate(response.message)
        }).catch((error) =>{
          alert(error)
        })
    }
    getData()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {state}
        </a>
      </header>
    </div>
  );
}

export default App;
