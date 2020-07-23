import React, { useState, useEffect } from 'react'

import { Header, VideosList, VideoDetails } from './components'
import { BrowserRouter, Route } from 'react-router-dom'

import youtube from './api/youtube'

const App = () => {

    const [videos, setVideos] = useState([])
    const [video, setVideo] = useState(null)

    const findVideosData = async () => {

        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCF2be36h31s9YC63CpT5J2Tby194OKXGU',
                q: 'One Piece'
            }
        })

        const { data: { items } } = response

        console.log(items)
        setVideos(items)

    }

    useEffect(() => {
        findVideosData()
    }, [])



    return <BrowserRouter>
        <Header seachQuery={this.findVideosData} />
        <main>

            <div className="container">
                <div className="content">

                    <Route exact path="/" component={VideosList} />
                    <Route path="/:id" component={VideoDetails} />

                </div>
            </div>
        </main>
    </BrowserRouter>
}

export default App