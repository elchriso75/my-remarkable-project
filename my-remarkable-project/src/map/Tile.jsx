

export { Tile }

function Tile({ tile, x, y }) {



    return (
        <div className="tile" style={{
            left: x,
            top: y
        }} >
            {tile.title}
        </div>
    )
}