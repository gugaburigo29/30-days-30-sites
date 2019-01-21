import React from 'react'
import PropTypes from 'prop-types'

import {Icon} from '../../style/home/Home'

const IconComponent = props => (
    <Icon>
        <a href={props.link} target='_blank'>
            { props.children }
        </a>
    </Icon>
)

IconComponent.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string,
}

export default IconComponent
