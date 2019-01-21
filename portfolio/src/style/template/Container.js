import styled from "styled-components";
import PropType from "prop-types";

const Container = styled.div`
      max-width: ${props => props.small ? '1140px;' : '1315px;'}
      margin: 0 auto;
      position: relative;
      height: 100%;
      
      ${props => props.alignCenter && 'align-items: center;'}
      
       ${props => props.flex && `
            display: flex;
            justify-content: flex-end;
       `}
`

Container.propTypes = {
    flex: PropType.bool,
    alignCenter: PropType.bool,
    small: PropType.bool
}

export {Container}
