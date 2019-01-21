import styled from 'styled-components'
import PropTypes from 'prop-types'

import {CUBIC_BEZIER, GREY, PRIMARY, TEXT_COLOR} from "../constants";
import pxToRem from '../utils/pxToRem'

const Content = styled.div`
      width: 100%;
      height: 700px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      ${ props => props.paddingBottom && `
          padding-bottom: ${ props.paddingBottom }px
      ` }
     ${ props => props.backgroundImage && `
          background-image: url(${props.backgroundImage});
          background-repeat: no-repeat;
          background-position: 100% 65%;
     `}
     ${ props => props.backgroundColor && `
          background-color: ${ props.backgroundColor }
     ` }
`

Content.propTypes = {
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    paddingBottom: PropTypes.number
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
      
      path{
          transition: .5s ${CUBIC_BEZIER};
      }
      
      &:hover{
          border-color: ${props => props.color || PRIMARY};
          background: ${props => props.color || PRIMARY};
          
        path{
          fill: white;
          stroke: white;
        }
      }
`

const Informations = styled.article`
      width: 100%;
      height: 80px;
      max-width: 800px;
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
      position: absolute;
      bottom: -25px;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50px;
`

export {
    Description,
    Content,
    Title,
    SocialIcons,
    Icon,
    Informations
}
