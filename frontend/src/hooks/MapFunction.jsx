function MapArt() {

    const ArtCollection = [
        
    ]

    return (
        <div>
            <ul>
                {/* Final Returned Array:
                */}
                {ArtCollection.map((art, index) => {
                    return(
                        <li key={index}>Time: {art.time} Title: {art.title} Price: {art.price} </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MapArt;