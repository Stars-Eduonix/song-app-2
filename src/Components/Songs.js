

const Songs = ({data, songPressed}) => {
   


    return(
        <div className="songs">
            <h1>Songs</h1> 
            {
                data.map((song, index) => (
                        <div className="songs-box">
                            <h3>{song.name}</h3>
                            <button
                             onClick={() => songPressed(song)}
                            >More Info</button>
                        </div>
                ))
            }
        </div>
    )
}

export default Songs