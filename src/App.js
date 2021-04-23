import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.js';
import Services from './Services.js';
import Home from './Home.jsx';

function App() {
  let data;
  const testData = () => {
    Services.getData().then((res)=>{
      data = res.data;
      console.log(data)
    });
  }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
