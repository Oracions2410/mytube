import React from 'react'

import PlayList from './PlayList/PlayList'

const VideoDetails = () => {
    return <React.Fragment>

        <div className="video-player">
            <div className="player">
                <video className="player-inner" src="./videos/video.mp4" controls></video>
            </div>
            <div className="video-infos">
                <div className="video-author-avatar">
                    <img src="./images/author-img.png" alt="author" />
                </div>
                <div className="video-details">
                    <div className="video-title">Minato à l'Akatsuki - The way of the ninja</div>
                    <div className="video-channel">Naruto way</div>
                    <div className="more-details flex-row">
                        <div className="video-views">240 vues</div>
                        <div className="video-date">il ya 4 jours</div>
                    </div>
                </div>
            </div>
            <div className="video-player-separator">
                <div className="separator"></div>
            </div>
        </div>

        <PlayList />

    </React.Fragment>
}

export default VideoDetails