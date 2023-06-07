

export { Tile }

function Tile({ tile }) {



    return (
        <div className="tile" style={{
            left: tile.x,
            top: tile.y
        }} >
            {tile.title}
        </div>
    )
}