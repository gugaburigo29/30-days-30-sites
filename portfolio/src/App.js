import React from 'react'
import Routes from './routes/routes'

import Header from "./components/template/Header";
import Footer from "./components/template/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main>
                    <Routes/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;
