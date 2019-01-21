import React from 'react'
import PropTypes from 'prop-types'

import {Icon} from '../../style/home/Home'

const IconComponent = props => (
    <Icon>
        <a href={props.link} target='_blank'>
            <img src={props.image} alt={props.name}/>
        </a>
    </Icon>
)

IconComponent.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
}

export default IconComponent
