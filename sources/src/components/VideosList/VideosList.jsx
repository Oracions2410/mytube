import React from 'react'
import { Link } from 'react-router-dom'

const VideosList = () => {
    return <React.Fragment>
        <div class="videos-list">


            <div className="videos-line">

                <div className="video-item">
                    <div class="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span class="video-time">10:03</span>

                    </div>
                    <div class="video-infos">
                        <div class="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div class="video-details">

                            <Link to="/videoId">
                                <div class="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div class="video-channel">Naruto Way</div>
                                <div class="more-details">
                                    <div class="video-views">243k vues</div>
                                    <div class="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>



                <div className="video-item">
                    <div class="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span class="video-time">10:03</span>

                    </div>
                    <div class="video-infos">
                        <div class="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div class="video-details">

                            <Link to="/videoId">
                                <div class="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div class="video-channel">Naruto Way</div>
                                <div class="more-details">
                                    <div class="video-views">243k vues</div>
                                    <div class="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>



                <div className="video-item">
                    <div class="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span class="video-time">10:03</span>

                    </div>
                    <div class="video-infos">
                        <div class="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div class="video-details">

                            <Link to="/videoId">
                                <div class="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div class="video-channel">Naruto Way</div>
                                <div class="more-details">
                                    <div class="video-views">243k vues</div>
                                    <div class="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>



                <div className="video-item">
                    <div class="video-screen">

                        <Link to="/videoId">
                            <img src="./images/videos-img.png" alt="video" />
                        </Link>

                        <span class="video-time">10:03</span>

                    </div>
                    <div class="video-infos">
                        <div class="author-avatar">
                            <img src="./images/author-img.png" alt="author" />
                        </div>
                        <div class="video-details">

                            <Link to="/videoId">
                                <div class="video-title">Minato a l'Akatsuki - The way of the ninja</div>
                                <div class="video-channel">Naruto Way</div>
                                <div class="more-details">
                                    <div class="video-views">243k vues</div>
                                    <div class="video-date">Il ya 4 jours</div>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>

            </div>

            <div class="separator">
                <img src="./images/green-separator.png" alt="separator" />
            </div>


        </div>
    </React.Fragment >
}

export default VideosList