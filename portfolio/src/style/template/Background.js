import styled from 'styled-components'
import PropTypes from 'prop-types'

const Section = styled.section`
        background-color: ${props => props.color || 'none'}
`

Section.propTypes = {
    color: PropTypes.string
}

export {
    Section
}
