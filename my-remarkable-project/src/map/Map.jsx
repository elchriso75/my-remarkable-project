import { Header } from '../components/Header';

export { Map }

function Map() {

    function handleMapClick(e) {
        alert(`x: ${e.clientX} y: ${e.clientY}`)
    }

    return (
        <div className="App map">
            <Header />
            <div className="remarkable-content">
                <div onClick={handleMapClick}>
                    <img src="nzski-the-remarkables-map-2021-web-1600x900-map-only.jpg" alt="Terrain Map" width="100%"/>
                </div>
            </div>
        </div>
    );
}