import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <form > <label>Enter name to display details: 
          <input type="text" id='fname'/>        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
