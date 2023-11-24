import styled from 'styled-components'
import { useState } from 'react';
import { servicos } from './dados';
import InputPesquisa from '../InputPesquisa';
import CardServicos from '../CardServicos';
import { Container } from 'react-bootstrap';

const ConteinerPesquisa = styled.section`
    width: 80vw;                    /* Define a largura do elemento "main" como 80% da largura do contêiner pai */
    height: calc(100%);             /* Define a altura da navegação como 100% da altura do contêiner pai */
    display: flex;
    flex-direction: column;
    align-items: center;            /* Centraliza os itens verticalmente no contêiner pai */
    gap: 3vh;
    h1{
        font-size:3vw;
        margin: 0;
        padding: 0;
    }    
`

const Titulo = styled.h1`

    color : ${props = props.cor || '#000000'};
    font-size: ${props = props.tamanhoFonte || '20px'};
    font-weight:bold;

`

function PesquisaServicos(){

    const[servicosEncontrados, setservicosEncontrados] = useState([]);

    return(
        <ContainerPesquisa>
            <Titulo cor={"#0a3792"} tamanhoFonte={"50px"}>
            Pesquisa Servicos de Interesse
            </Titulo>

            <InputPesquisa
            placeholder='Digite o Servico Necessario:'
            onChange={evento => {
                const textoDigitado = evento.target.value;
                const resultadoBusca = servicos.filer(servicos => servicos.titulo.include(textoDigitado))
                setservicosEncontrados(resultadoBusca)
            }}
            {
            servicosEncontrados.map(servicos =>(
                <CardServicos
                titulo = {servicos.titulo}
                horas = {servicos.horas}
                imagem = {servicos.imagem}
                />
                ))                
            }
        </ConteinerPesquisa>
    )
}
export default PesquisaServicos