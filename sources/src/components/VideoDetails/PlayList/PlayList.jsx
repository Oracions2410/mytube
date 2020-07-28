import React from 'react'

import PlayListItem from './PlayListItem'

const PlayList = ({ videos }) => {
    if (!videos) {
        return 'Loading...'
    }

    return <React.Fragment>

        <div className="videos-playlist">
            <div className="playlist-head">Voir aussi</div>
            <div className="playlist">

                {videos.slice(0, 5).map((video, i) => <PlayListItem key={i} video={video} />)}

            </div>
        </div>

    </React.Fragment >
}

export default PlayList