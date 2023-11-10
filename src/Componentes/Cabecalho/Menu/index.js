import styled from "styled-components"
const lista = ["Manuntenção de Computadores", "Compra e Venda de Peças", "Conserto de Celulares"]

function Menu() {
    return (
        <ul className="header.menu">
            {
                lista.map((item)=>(
                <li className="menu-iten">{item}</li>)
                )
            }
        </ul>
    )
}
export default Menu;