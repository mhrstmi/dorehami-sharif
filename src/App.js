import './App.css';
import BottomNavbar from './components/BottomNavbar/BottomNavbar'
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <>
    

    <Router>
        <Switch>

          <Route path="/" exact>
            <div className="home"> 
              <Home /> 
            </div>
          </Route> 

     
              
        </Switch>
        <BottomNavbar />
      </Router>
    
    </>
  );
}

export default App;
