import React from 'react'

import Top from './sections/Top'
import Skills from './sections/Skills'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Top/>
                <Skills/>
            </React.Fragment>
        )
    }
}

export default Home;
