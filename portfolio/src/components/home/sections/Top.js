import React from 'react'

import Informations from './Informations'

import {Container} from "../../../style/template/Container";
import {Section} from "../../../style/template/Background";
import {Content, Description, SocialIcons, Title} from "../../../style/home/Home";
import {Button} from "../../../style/components/Buttons";

import Icon from '../Icon'
import background from '../../../assets/img/background/bg-topo.svg'
import Insta from '../../../assets/img/icons/insta'
import Git from '../../../assets/img/icons/git'
import Linkedin from '../../../assets/img/icons/linkedin'

class Top extends React.Component {
    render() {
        return (
            <Section color="white">
                <Container small>
                    <Content backgroundImage={background}
                             paddingBottom={100}>
                        <Title>
                            Olá, meu nome é
                            <strong> Lorem Ipsum </strong>
                        </Title>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo, unde. Cupiditate
                            delectus dolor facere fuga nulla quis reiciendis. Animi atque incidunt laboriosam, nemo
                            nesciunt nihil pariatur perferendis praesentium quos ❤️.
                        </Description>
                        <Button pill>
                            CONTATE-ME
                        </Button>
                        <SocialIcons>
                            <Icon link="google.com" name="Linkedin">
                                <Linkedin/>
                            </Icon>
                            <Icon link="google.com" name="Github">
                                <Git/>
                            </Icon>
                            <Icon link="google.com" name="Instagram">
                                <Insta/>
                            </Icon>
                        </SocialIcons>
                    </Content>
                    <Informations/>
                </Container>
            </Section>
        )
    }
}

export default Top;
