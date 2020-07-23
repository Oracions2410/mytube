import React from 'react'
import { Link } from 'react-router-dom'

const PlayList = () => {
    return <React.Fragment>

        <div className="videos-playlist">
            <div className="playlist-head">Voir aussi</div>
            <div className="playlist">

                <div className="video-item">

                    <div className="video-screen">
                        <Link to="/videoID">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>
                        <div className="video-time">20:34</div>
                    </div>

                    <div className="video-infos">
                        <Link to="/videoId">
                            <div className="video-title">Minato à l'Akatsuki - The way of the ninja</div>
                            <div className="video-channel">Naruto way</div>
                            <div className="video-views">240 vues</div>
                            <div className="video-date">il ya 4 jours</div>

                        </Link>
                    </div>


                </div>

            </div>
        </div>

    </React.Fragment >
}

export default PlayList