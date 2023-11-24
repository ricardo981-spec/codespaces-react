import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import Servico from "../../Imagem/Servicos.png";
import Pecas from "../../Imagem/Pecas.png";
import Celular from "../../Imagem/Celular.png";
import React from 'react';

const CarouselStyled = styled(Carousel)`
    margin-top: 20px;
    overflow: hidden;
    height: 60vh;
    width: 50vw;
    img{
        object-fit: cover;
    }
`

function CarouselBootstrap() {
    return(
    <CarouselStyled>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Servico}
                alt=""
            />
            <Carousel.Caption>
                <h3>Manuntenção de Computadores</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Pecas}
                alt=""
             />
        <Carousel.Caption>
          <h3>Compra e Vendas de Peças</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img
                className="d-block w-100"
                src={Celular}
                alt=""
             />
        <Carousel.Caption>
          <h3>Manuntenção de Celulares</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselStyled>
    )
}

export default CarouselBootstrap 
