import { Header } from '../components/Header';
import { useRef, useState } from 'react';
import { Tile } from './Tile'

export { Map }

function Map() {
    const MapWidth = 1600;
    const MapHeight = 900
    const mapRef = useRef(null)
    const [tiles, setTiles] = useState([]);

    const getUniqueId = () => {
        return parseInt(Date.now())
    }

    function handleMapClick(e) {
        const map = mapRef.current;

        // calculate the x/y position on the map based on the scaled size/display of the map
        var rect = map.getBoundingClientRect();
        var scaleX = MapWidth / rect.width;
        var scaleY = MapHeight / rect.height;

        // scale position: (first adjust, then scale)
        var mouseX = Math.round((e.clientX - rect.left) * scaleX);
        var mouseY = Math.round((e.clientY - rect.top) * scaleY);

        const tile = {
            id: getUniqueId(),
            x: mouseX,
            y: mouseY,
            title: `mouseX: ${mouseX} mouseY: ${mouseY}`
        };
        console.log(tile.id)
        const newTiles = [
            ...tiles,
            tile
        ];
        setTiles(newTiles);
    }

    return (
        <div className="App map">
            <Header />
            <div className="remarkable-content" ref={mapRef}>
                <div className="map" onClick={handleMapClick}>
                    {tiles.map(t => {
                        return (
                            <Tile key={t.id} tile={t} />
                    )
                    }) }
                    <img src="nzski-the-remarkables-map-2021-web-1600x900-map-only.jpg" alt="Terrain Map" width="100%" />
                </div>
            </div>
        </div>
    );
}