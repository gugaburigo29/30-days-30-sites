import styled from 'styled-components'
import {Link} from "react-router-dom";
import {PRIMARY, TEXT_COLOR} from "../constants"

export const Header = styled.header`
      width: 100%;
      height: 60px;
      background: white;
      box-shadow: 0 2px 15px rgba(0, 0, 0, .1);
`

export const Logo = styled.div`
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 0;
      border: 3px solid ${PRIMARY};
      overflow: hidden;
      
      img{
         max-width: 100%;
      }
`

export const Nav = styled.nav`
      display: flex;
`

export const NavLink = styled(Link)`
      color: ${TEXT_COLOR};
      
      :not(:last-child){
          margin-right: 30px;
      }
      
      ${props => props.active && `
          color: black;
          font-weight: 600;
          border-bottom: 2px solid ${PRIMARY};
      `}
`
