import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { Map } from './map/Map';


import './App.css';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
            </Routes>
        </Router>
    )
}

export default App;
