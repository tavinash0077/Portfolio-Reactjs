// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';

function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <Service/>
      <Resume/>
      <Portfolio/>
    </main>
    </>
  );
}

export default App;
