import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    height: 100vh;
    width: 100%;
    background-color: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
const DivMostraMensagem = styled.div `
    width: 60%;
    background-color: lightgreen;
    height: 80vh;

`
const DivEnviarMensagem = styled.div `
`
const CaixaMensagem = styled.p `
    padding: 2%;
    background-color: white;
    margin: 2%;`

const NomeUsuario = styled.span `
    font-weight:bold;`


export class EnviaMensagem extends React.Component {
    
     state = {        
               
        valorInputUsuario: '',
        valorInputMensagem: '',
        listadeMensagens : []
    }

    mudouInputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
    }

    mudouInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    }

    EnviarMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const mensagemPraEnviar = [...this.state.listadeMensagens, novaMensagem]

        this.setState({
            listadeMensagens: mensagemPraEnviar,
            valorInputMensagem: '',
            valorInputUsuario:'',
        })        
    }

    render() {
        const Mensagens = this.state.listadeMensagens.map(
            (mensagem) => {
               return <CaixaMensagem><NomeUsuario>{mensagem.usuario + ":"} </NomeUsuario>{ mensagem.mensagem}</CaixaMensagem>     
           })

        return (
            <Container>
                <DivMostraMensagem>
                    {Mensagens}
                </DivMostraMensagem>                
                <DivEnviarMensagem>
                    <input type="text"  placeholder="Usuário" onChange={this.mudouInputUsuario} value={this.state.valorInputUsuario}/>
                    <input type="text"  placeholder="Mensagem" onChange={this.mudouInputMensagem} value={this.state.valorInputMensagem}/>
                    <button onClick={this.EnviarMensagem}>Enviar</button>
                </DivEnviarMensagem>
            </Container>
        ) 
    }
}

