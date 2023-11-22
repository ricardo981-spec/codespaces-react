import {Carousel} from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../../Imagem/Logo.png";


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
                    <Carousel.Item>
                        <img
                            className="d-block w-100" 
                            src={Logo} 
                            alt=""
                        />
                    </Carousel.Item>
        </CarouselStyled>
}

export default CarouselBootstrap 
