import React from 'react'

import {Container} from "../../style/template/Container";
import {Section} from "../../style/template/Background";
import {Content, Description, SocialIcons, Title} from "../../style/home/Home";
import {Button} from "../../style/components/Buttons";
import Icon from './Icon'

import background from '../../assets/img/background/bg-topo.svg'
import insta from '../../assets/img/icons/insta.svg'
import git from '../../assets/img/icons/git.svg'
import linkedin from '../../assets/img/icons/linkedin.svg'

class Home extends React.Component {
    render() {
        return (
            <Section color="white">
                <Container small>
                    <Content backgroundImage={background}>
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
                            <Icon image={linkedin} link="google.com" name="Linkedin"/>
                            <Icon image={git} link="google.com" name="Github"/>
                            <Icon image={insta} link="google.com" name="Instagram"/>
                        </SocialIcons>
                    </Content>
                </Container>
            </Section>
        )
    }
}

export default Home;
