import Feed from './components/Feed/Feed';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="App">
      {!user ? 
        <Login />
        :
      <>
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </>
    }
    </div>
  );
}

export default App;
