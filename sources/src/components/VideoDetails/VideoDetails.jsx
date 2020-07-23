import React from 'react'

import PlayList from './PlayList/PlayList'

const VideoDetails = () => {
    return <React.Fragment>

        <div class="video-player">
            <div class="player">
                <video class="player-inner" src="./videos/video.mp4" controls></video>
            </div>
            <div class="video-infos">
                <div class="video-author-avatar">
                    <img src="./images/author-img.png" alt="author" />
                </div>
                <div class="video-details">
                    <div class="video-title">Minato à l'Akatsuki - The way of the ninja</div>
                    <div class="video-channel">Naruto way</div>
                    <div class="more-details flex-row">
                        <div class="video-views">240 vues</div>
                        <div class="video-date">il ya 4 jours</div>
                    </div>
                </div>
            </div>
            <div class="video-player-separator">
                <div class="separator"></div>
            </div>
        </div>

        <PlayList />

    </React.Fragment>
}

export default VideoDetails