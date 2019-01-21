import styled from 'styled-components'
import PropTypes from 'prop-types'

import {GREY, PRIMARY, TEXT_COLOR} from "../constants";
import pxToRem from '../utils/pxToRem'

const Content = styled.div`
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      background-image: url(${props => props.backgroundImage});
      background-repeat: no-repeat;
      background-position: 100% 85%;
`

Content.propTypes = {
    backgroundImage: PropTypes.string
}

const Title = styled.h2`
      color: ${TEXT_COLOR};
      font-weight: 500;
      text-transform: uppercase;
      max-width: 550px;
      font-size: ${pxToRem(36)};
      margin-bottom: 15px;
      
      strong{
          font-weight: 800;
      }
`

const Description = styled.p`
      color: ${GREY};
      font-size: ${pxToRem(16)};
      margin-bottom: 45px;
      max-width: 550px;
`

const SocialIcons = styled.div`
      width: 100%;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
`

const Icon = styled.div`
      width: 45px;
      height: 45px;
      border: 1px solid #B8B8B8;
      background: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      :hover{
          border-color: ${props => props.color || PRIMARY};
          background: ${props => props.color || PRIMARY};
      }
`

export {
    Description,
    Content,
    Title,
    SocialIcons,
    Icon
}
