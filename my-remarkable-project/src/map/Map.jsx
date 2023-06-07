import { Header } from '../components/Header';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Tile } from './Tile'

export { Map }

function Map() {
    // Map image dimensions
    const MapImage = {
        width: 1600,
        height: 900
    }

    // reference to the HTML element that contains the map image
    const mapRef = useRef(null)

    // state management for the list of tiles to overlay on the map image
    const [tiles, setTiles] = useState([]);

    // X/Y values to scale the tile positions based on the map size.  Using useRef()
    // as we don't want to cause a state change when setting these values (as this would cause
    // an unnessesary render)
    const scaleX = useRef(1.0)
    const scaleY = useRef(1.0)

    // state variable used perfully to trigger a state change, and hence a re-render when the
    // windows size changes
    const [, setWindowSize] = useState(0);
    
    // callback function to calculate the x/y scale when the component first initialises
    // and when the window is resized
    const setScale = useCallback(() => {
        const map = mapRef.current;
        const rect = map.getBoundingClientRect();
        scaleX.current = MapImage.width / rect.width;
        scaleY.current = MapImage.height / rect.height;
    }, [scaleX, scaleY, MapImage.width, MapImage.height])

    // callback function to recalculate the x/y scale and update the state to force a re-render
    // when the window is resized
    const handleWindowResize = useCallback(() => {
        setScale();
        setWindowSize(window.innerWidth);
    }, [setScale]);    

    useEffect(() => {
        // initialise the scale
        setScale();

        // add an event lisester for when the window is resized
        window.addEventListener('resize', handleWindowResize);
        return () => {
            // remove the window event listener when the componet is disposed off
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [setScale, handleWindowResize]);

    // Generates a unique id for use with each tile.
    const getUniqueId = () => {
        return parseInt(Date.now())
    }

    const handleMapClick = (e) => {
        const map = mapRef.current;
        const rect = map.getBoundingClientRect();

        // scale position: (first adjust, then scale)
        const mouseX = Math.round((e.clientX - rect.left) * scaleX.current);
        const mouseY = Math.round((e.clientY - rect.top) * scaleY.current);

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