import styled from "styled-components";

const CardServicos = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: clamp(200px,200px + 1vh, 15vh); 
    border-radius:10px;
    background-color:darkgrey;
    gap:1vw;
    box-shadow: 
        5px 5px 0px 0px rgba(0, 0, 0, 0.2),
        5px 5px 0px 0px rgba(0, 0, 0, 0.2);
    img{        
        height: 90%;
        margin-left:1%
    }
`

function CardServicos({imagem,titulo,horas,}){
    return(

        <CardServicoStyled>
            <img src={imagem} alt=""/>
            <infoServicos>
                <h2>{titulo}</h2>
                <h3><b>Hórarios Disponiveis: {horas}</b></h3>
            </infoServicos>
        </CardServicoStyled>
    )
}

export default CardServicos