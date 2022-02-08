import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import AppContent from "./component/appContent";
import ErrorBoundary from './component/errorBoundary';
import favicon from "./assets/favicon.ico";

function App() {
  
  return (
    <BrowserRouter>
    
      <div className="App">
      <nav className="App-nav">
            <div className="navlinks">
              <Link to="/favorites">Favourites</Link>
            </div>
            <div>   |   </div>
            <div className="navlinks">
              <Link to="/nearest">Nearest</Link>
            </div>
        </nav>
        <h1><img className="carlogo" src={favicon}/>Where Can Park</h1>

          <div className="App-content">
            <Switch>
              <Route path="/:id">
                <ErrorBoundary>
                  <AppContent />
                </ErrorBoundary>
              </Route>
              <Route path="/">
                Your favourite parking app.
              </Route>
            </Switch>
          </div>

      </div>

    </BrowserRouter>
  );
};

export default App;
