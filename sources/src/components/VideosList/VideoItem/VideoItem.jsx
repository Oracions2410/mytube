import React from 'react'
import { Link } from 'react-router-dom'

const VideoItem = ({ video }) => {

    console.log(window.location.href)

    const resizeString = (stringValue, length) => {
        return stringValue.length > length ? stringValue.substring(0, length) + '...' : stringValue
    }

    return <React.Fragment>

        <div className="video-item">
            <div className="video-screen">

                <Link to={`/${video.id.videoId}`}>
                    <img src={video.snippet.thumbnails.medium.url} alt="video" />
                </Link>

                <span className="video-time">10:03</span>

            </div>
            <div className="video-infos">
                <div className="author-avatar">
                    <img src="./images/author-img.png" alt="author" />
                </div>
                <div className="video-details">

                    <Link to={`/${video.id.videoId}`}>
                        <div className="video-title">{resizeString(video.snippet.title, 20)}</div>
                        <div className="video-channel">{resizeString(video.snippet.channelTitle, 20)}</div>
                        <div className="more-details">
                            <div className="video-views">243k vues</div>
                            <div className="video-date">Il ya 4 jours</div>
                        </div>
                    </Link>

                </div>
            </div>

        </div>


    </React.Fragment>
}

export default VideoItem