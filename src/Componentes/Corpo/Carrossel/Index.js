import { Carousel } from "bootstrap";
import styled from "styled-components";

const CarroselStyled = styled(Carousel)
margin-top
overflow;
height; 20
width; 20

function CarouselBootstrap(){
    return
        <CarouselStyled>
            <Carousel>
                    <Carousel.item>
                        <img src = {/home/codespace/codespaces-react-2/src/Imagem/Logo.png} alt=""/>
                    </Carousel.item>
            </Carousel>
        </CarouselStyled>
}