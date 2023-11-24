import styled from 'styled-components'
import {useState} from 'react';
import {servicos} from './dados';
import InputPesquisa from '../InputPesquisa';
import CardServicos from '../CardServicos';

const ConteinerPesquisa = styled.section`
    width: 80vw;                    
    height: calc(100%);             
    display: flex;
    flex-direction: column;
    align-items: center;            
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
        <ConteinerPesquisa>
            <Titulo cor={"#0a3792"} tamanhoFonte={"50px"}>
            Pesquisa Servicos de Interesse
            </Titulo>

            <InputPesquisa
                placeholder='Digite o Servico Necessario:'
                onChange= {evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoBusca = servicos.filer(servico => servico.titulo.include(textoDigitado))
                    setservicosEncontrados(resultadoBusca)
                }}
            />
            {
                servicosEncontrados.map(servico =>(
                    
                    <CardServicos
                    titulo = {servico.titulo}
                    horas = {servico.horas}
                    imagem = {servico.imagem}
                    />
                    ))                
            }
        </ConteinerPesquisa>
    )
}
export default PesquisaServicos