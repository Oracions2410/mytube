import React from 'react'
import { Link } from 'react-router-dom'

const PlayList = () => {
    return <React.Fragment>

        <div class="videos-playlist">
            <div class="playlist-head">Voir aussi</div>
            <div class="playlist">

                <div class="video-item">

                    <div class="video-screen">
                        <Link to="/videoID">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>
                        <div class="video-time">20:34</div>
                    </div>

                    <div class="video-infos">
                        <Link to="/videoId">
                            <div class="video-title">Minato à l'Akatsuki - The way of the ninja</div>
                            <div class="video-channel">Naruto way</div>
                            <div class="video-views">240 vues</div>
                            <div class="video-date">il ya 4 jours</div>

                        </Link>
                    </div>


                </div>

            </div>
        </div>

    </React.Fragment >
}

export default PlayList