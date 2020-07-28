import React from 'react'
import { useParams } from 'react-router-dom'

import PlayList from './PlayList/PlayList'


const VideoDetails = ({ videos }) => {

    const { id } = useParams()

    const videoUrl = `https://www.youtube.com/embed/${id}`

    return <React.Fragment>

        <div className="video-player">
            <div style={{ height: '400px' }} className="player">
                <iframe style={{ height: '100%' }}
                    frameBorder="0"
                    width="100%" height="100%"
                    title="video player"
                    className="player-inner"
                    src={videoUrl} controls></iframe>
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

        <PlayList videos={videos} />

    </React.Fragment>
}

export default VideoDetails