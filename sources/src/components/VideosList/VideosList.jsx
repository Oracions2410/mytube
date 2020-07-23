import React from 'react'
import { Link } from 'react-router-dom'

const VideosList = () => {
    return <React.Fragment>
        <div className="videos-list">


            <div className="videos-line">

                <div className="video-item">
                    <div className="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span className="video-time">10:03</span>

                    </div>
                    <div className="video-infos">
                        <div className="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div className="video-details">

                            <Link to="/videoId">
                                <div className="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div className="video-channel">Naruto Way</div>
                                <div className="more-details">
                                    <div className="video-views">243k vues</div>
                                    <div className="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>



                <div className="video-item">
                    <div className="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span className="video-time">10:03</span>

                    </div>
                    <div className="video-infos">
                        <div className="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div className="video-details">

                            <Link to="/videoId">
                                <div className="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div className="video-channel">Naruto Way</div>
                                <div className="more-details">
                                    <div className="video-views">243k vues</div>
                                    <div className="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>



                <div className="video-item">
                    <div className="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span className="video-time">10:03</span>

                    </div>
                    <div className="video-infos">
                        <div className="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div className="video-details">

                            <Link to="/videoId">
                                <div className="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div className="video-channel">Naruto Way</div>
                                <div className="more-details">
                                    <div className="video-views">243k vues</div>
                                    <div className="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>



                <div className="video-item">
                    <div className="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span className="video-time">10:03</span>

                    </div>
                    <div className="video-infos">
                        <div className="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div className="video-details">

                            <Link to="/videoId">
                                <div className="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div className="video-channel">Naruto Way</div>
                                <div className="more-details">
                                    <div className="video-views">243k vues</div>
                                    <div className="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>

            </div>

            <div className="separator">
                <img src="./images/green-separator.png" alt="separator" />
            </div>


        </div>
    </React.Fragment >
}

export default VideosList