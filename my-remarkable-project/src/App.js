import { RemarkablesLogo } from './remarkable-header-logo'
import './App.css';

function App() {
  return (
    <div className="App home">
        <header className="site-header">
              <RemarkablesLogo />

              <div class="l-flex-wrapper">
                  <ul className="site-header__actions">
                      <li>
                          <a class="btn btn-small btn-primary" href="/map">Map</a>
                      </li>
                  </ul>

                  
              </div>
              
        </header>
        
        <div className="remarkable-content">
            The main page
        </div>
    </div>
  );
}

export default App;
