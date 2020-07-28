import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PlayListItem = ({ video }) => {

    const resizeString = (stringValue, length) => {
        return stringValue.length > length ? stringValue.substring(0, length) + '...' : stringValue
    }

    return <div className="video-item">

        <div className="video-screen">
            <Link to={`/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.medium.url} alt="video" />
            </Link>
            <div className="video-time">20:34</div>
        </div>

        <div className="video-infos">
            <Link to={`/${video.id.videoId}`}>
                <div className="video-title">{resizeString(video.snippet.title, 20)}</div>
                <div className="video-channel">{resizeString(video.snippet.channelTitle, 20)}</div>
                <div className="video-views">240 vues</div>
                <div className="video-date">il ya 4 jours</div>

            </Link>
        </div>
    </div>

}

export default PlayListItem