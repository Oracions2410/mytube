import React, { useState, useEffect } from 'react'

import { Header, VideosList, VideoDetails, Loader } from './components'
import { Route, Redirect } from 'react-router-dom'

import youtube from './api/youtube'

const App = () => {

    const [videos, setVideos] = useState([])
    const [video, setVideo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [notVideos, setNotVideos] = useState(false)

    const findVideosData = async (searchTerms) => {
        //console.log('q: ', searchTerms)
        setLoading(true)
        //setVideos([])

        try {
            const response = await youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 12,
                    /*key: 'AIzaSyCF2be36h31s9YC63CpT5J2Tby194OKXGU',*/
                    key: 'AIzaSyAoROBF_kh0GAvMzy1_nInJ0e6FjDXAayc',
                    q: searchTerms
                }
            })

            const { data: { items } } = response

            if (items.length === 0) {
                setNotVideos(true)
            } else {
                setNotVideos(false)
            }

            console.log('--->', items)
            setVideos(items)
            //console.log(response)

            setLoading(false)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        async function fetchData() {
            findVideosData('The shin sekai mes torts')
        }

        fetchData()
    }, [])


    return <React.Fragment>
        <Header searchQuery={findVideosData} />
        <main>

            <div className="container">
                {loading ? <Loader /> : null}
                <div className="content">

                    {loading ? <Redirect to="/" /> : null}
                    <Route exact path="/" render={() => <VideosList noVideos={notVideos} videos={videos} />} />
                    <Route path="/:id" render={() => <VideoDetails videos={videos} video={video} />} />

                </div>
            </div>
        </main>

        <footer class="footer">
            <p class="footer-text">Build by Oracions2410@gmail.com</p>
        </footer>
    </React.Fragment>
}

export default App