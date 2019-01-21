import React from 'react'
import {Header, Logo, Nav, NavLink} from '../../style/template/Header'
import {Container} from "../../style/template/Container";

import logo from '../../assets/img/logo/logo.png'

class HeaderComponent extends React.Component {
    getRoute() {
        return window.location.pathname;
    }

    render() {
        this.getRoute();
        return (
            <Header>
                <Container flex alignCenter>
                    <Logo>
                        <img src={logo} alt="Logo"/>
                    </Logo>
                    <Nav>
                        <NavLink to='/'
                                 active={this.getRoute() === '/'}>Home</NavLink>
                        <NavLink to='/skills'
                                 active={this.getRoute() === '/skills'}>Skills</NavLink>
                        <NavLink to='/contact'
                                 active={this.getRoute() === '/contact'}>Contact</NavLink>
                    </Nav>
                </Container>
            </Header>
        )
    }
}

export default HeaderComponent;
