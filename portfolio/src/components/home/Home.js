import React from 'react'

import {Container} from "../../style/template/Container";
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
            <section style={{background: 'white'}}>
                <Container small>
                    <Content backgroundImage={background}>
                        <Title>
                            Olá, meu nome é
                            <strong> Luís Gustavo Búrigo Alexandre</strong>
                        </Title>
                        <Description>
                            Sou programador <strong>Front-end</strong>, amante da tecnologia, café e de uma boa música
                            eletrônica ❤️.
                        </Description>
                        <Button pill>
                            CONTATE-ME
                        </Button>
                        <SocialIcons>
                            <Icon image={linkedin} link="google.com" name='Linkedin'/>
                            <Icon image={git} link="google.com" name='Github'/>
                            <Icon image={insta} link="google.com" name='Instagram'/>
                        </SocialIcons>
                    </Content>
                </Container>
            </section>
        )
    }
}

export default Home;
