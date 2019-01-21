import styled from 'styled-components'
import PropTypes from 'prop-types'

import {CUBIC_BEZIER, PRIMARY} from "../../constants/style/colors";
import pxToRem from "../utils/pxToRem"
import toRGBA from "../utils/toRGBA"

const Button = styled.button`
      border: 2px solid ${props => props.color || PRIMARY};
      border-radius: 25px;
      font-size: ${pxToRem(12)};
      font-weight: 800;
      padding: 1em 1.5em;
      cursor: pointer;
      transition: .5s ${ CUBIC_BEZIER };
      
      ${props => `
            box-shadow: 2px 5px 15px ${toRGBA(props.color || PRIMARY, .5)};
            &:hover{
                box-shadow: 0 0 10px ${toRGBA(props.color || PRIMARY, .5)};
            }
      `}

      ${props => props.outline && `
          background-color: white;
          color: ${props.color || PRIMARY}
      `}
      
      ${props => props.pill && `
          background-color: ${props.color || PRIMARY};
          color: white
      `}
`

Button.propTypes = {
    outline: PropTypes.bool,
    pill: PropTypes.bool,
    color: PropTypes.string
}

export {Button}
