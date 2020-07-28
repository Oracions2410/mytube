import React from 'react'

import VideoItem from './VideoItem/VideoItem'

const VideosList = ({ videos, noVideos }) => {

    console.log(videos, noVideos)

    if (noVideos) {
        return <React.Fragment>
            <div className="videos-list">
                <div className="videos-line">
                    <h1 className="videos-notFound">Aucune vidéos n'a été trouvée !</h1>
                </div>
            </div>
        </React.Fragment>
    }


    return <React.Fragment>
        <div className="videos-list">


            {/**
             *  Constrution de la line à 4 colunes
             *  1 - On parcour la liste des vidéos
             *  2 - On Construit une ligne
             *  3 - On ajoute 4 items
             *  4 - On contruit une autre ligne
             * 
             
             {videos.map((video, i) => {
                if (i % 4 === 0) {
                    console.log('((((', i)
                    return <div key={i} className="videos-line">
                        <VideoItem key={i} video={video} />
                    </div>
                } else {
                    return <VideoItem key={i} video={video} />
                }
            })}
             
             */}

            <div className="videos-line">
                {videos.slice(0, 4).map((video, i) => <VideoItem key={i} video={video} />)}
            </div>

            <div className="separator">
                <img src="./images/red-separator.png" alt="separator" />
            </div>

            <div className="videos-line">
                {videos.slice(4, 8).map((video, i) => <VideoItem key={i} video={video} />)}
            </div>

            <div className="separator">
                <img src="./images/green-separator.png" alt="separator" />
            </div>

            <div className="videos-line">
                {videos.slice(8, 12).map((video, i) => <VideoItem key={i} video={video} />)}

            </div>





        </div>
    </React.Fragment >
}

export default VideosList