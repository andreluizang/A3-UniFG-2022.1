import './App.css';
import HomePage from '../Components/Home/HomePage';
import Header from '../Components/Home/Header';
function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className="container d-flex align-items-center flex-column">
          <HomePage/>
      </div>      
    </div>
  );
}

export default Home;