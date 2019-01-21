import React from 'react'
import {Route} from "react-router-dom";

import Home from '../components/home/Home'

export default props => (
    <>
        <Route path='/' exact component={Home}/>
    </>
)
