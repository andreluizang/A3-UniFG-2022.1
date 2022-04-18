import './App.css';
import RegisterForm from './Components/Register/RegisterForm';
import Header from './Components/Register/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container d-flex align-items-center flex-column">
          <RegisterForm/>
      </div>      
    </div>
  );
}

export default App;