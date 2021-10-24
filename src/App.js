import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Mainbody from './components/Mainbody';
import GlobalState from './contexts/GlobalStates';
function App() {
  return (

    <>
        <Header/>
        <GlobalState>

            <Mainbody/>
        </GlobalState>
    </>
     
  );
}

export default App;
