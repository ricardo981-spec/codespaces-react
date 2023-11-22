import {Carousel} from "react-bootstrap";
import styled from "styled-components";
import Logo from "/home/codespace/codespaces-react-2/src/Imagem/Login.jpg"


const CarouselStyled = styled(Carousel)`
    margin-top: 20px;
    overflow: hidden;
    height: 60vh;
    width: 50vw;
    img{
        object-fit: cover;
    }
`

function CarouselBootstrap(){
    return
        <CarouselStyled>
                    <Carousel.item>
                        <img src = {/home/codespace/codespaces-react-2/src/Imagem/Logo.png} alt=""/>
                    </Carousel.item>
        </CarouselStyled>
}

export default CarouselBootstrap 
