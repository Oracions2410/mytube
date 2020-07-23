import React from 'react'

import { Header, VideosList, VideoDetails } from './components'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return <BrowserRouter>
        <Header />
        <main>

            <div class="container">
                <div class="content">

                    <Route exact path="/" component={VideosList} />
                    <Route path="/:id" component={VideoDetails} />

                </div>
            </div>
        </main>
    </BrowserRouter>
}

export default App