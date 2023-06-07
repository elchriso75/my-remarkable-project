import { Header } from '../components/Header';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Tile } from './Tile'

export { Map }

function Map() {
    const MapImage = {
        width: 1600,
        height: 900
    }
    const mapRef = useRef(null)
    const [tiles, setTiles] = useState([]);
    const scaleX = useRef(1.0)
    const scaleY = useRef(1.0)
    const [, setWindowSize] = useState(0);
    

    const setScale = useCallback(() => {
        const map = mapRef.current;
        const rect = map.getBoundingClientRect();
        scaleX.current = MapImage.width / rect.width;
        scaleY.current = MapImage.height / rect.height;
    }, [scaleX, scaleY, MapImage.width, MapImage.height])

    const handleWindowResize = useCallback(() => {
        setScale();
        setWindowSize(window.innerWidth);
    }, [setScale]);    

    useEffect(() => {
        setScale();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [setScale, handleWindowResize]);

    // Generates a unique id for use with each tile.
    const getUniqueId = () => {
        return parseInt(Date.now())
    }

    function handleMapClick(e) {
        const map = mapRef.current;

        // calculate the x/y position on the map based on the scaled size/display of the map
        const rect = map.getBoundingClientRect();
        const scaleX = MapImage.width / rect.width;
        const scaleY = MapImage.height / rect.height;

        // scale position: (first adjust, then scale)
        const mouseX = Math.round((e.clientX - rect.left) * scaleX);
        const mouseY = Math.round((e.clientY - rect.top) * scaleY);

        const tile = {
            id: getUniqueId(),
            x: mouseX,
            y: mouseY,
            title: `mouseX: ${mouseX} mouseY: ${mouseY} hello world`
        };
        
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
                    {
                        tiles.map(t => {
                            // calculate the x/y values based on the current scale of the map image
                            const x = Math.round(t.x / scaleX.current);
                            const y = Math.round(t.y / scaleY.current);
                            return (
                                <Tile key={t.id} tile={t} x={x} y={y} />
                            )
                    }) }
                    <img src="nzski-the-remarkables-map-2021-web-1600x900-map-only.jpg" alt="Terrain Map" width="100%" />
                </div>
            </div>
        </div>
    );
}