import { Header } from '../components/Header';
import { useRef } from 'react';

export { Map }

function Map() {
    const mapRef = useRef(null)

    function handleMapClick(e) {
        alert(mapRef.current.innerHTML)

        
    }

    return (
        <div className="App map">
            <Header />
            <div className="remarkable-content" ref={mapRef}>
                <div onClick={handleMapClick}>
                    <img src="nzski-the-remarkables-map-2021-web-1600x900-map-only.jpg" alt="Terrain Map" width="100%"/>
                </div>
            </div>
        </div>
    );
}