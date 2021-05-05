// React
// import axios from 'axios';

import React, { useEffect, useState } from 'react';
import instanciaAxios from './ajax/instanciaAxios';

const ListaTarefas = () => {

    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaSolicitacoes, setListaSolicitacoes] = useState([]);

    const pegarCategorias = async () => {
        try {

            const resposta = await instanciaAxios.get('../json/categorias.json');
            console.log(`Resultado: ${ JSON.stringify( resposta.data )}`);
            /*
             Permite que a impressão de uma string com resultado de uma variável
             ou resultado de uma função com o método stringfy do objeto JSON 
             */
            setListaCategorias(resposta.data.categorias);

        } catch (err) {
            // console.log(error.message);

        }

    };

    const pegarSolicitacoes = async () => {
        try {

            const resposta = await instanciaAxios.get('../json/solicitacoes.json');
            console.log(`Resultado: ${ JSON.stringify( resposta.data )}`);
 
            setListaSolicitacoes(resposta.data.solicitacoes);

        } catch (err) {
            // console.log(error.message);

        }

    };

    useEffect(() => {
        pegarCategorias();
        pegarSolicitacoes();
    }, []);

    const OpcoesCategoriasComponente = () => {

        const listaCategoriasJSX = listaCategorias.map( ( item ) => {
            return (
                <option>
                    { item.descricao }
                    {/* Acessa o valor da descrição do objeto do array categorias.json */}
                </option>
            )
        });

        return listaCategoriasJSX;
    };

    return (
        <> {/* ReactFragment */}
            <div>
                {/* primeiro_parametro */}
                <div id="container">
                    <div id="texto_chamativo">
                        <div><legend>Preencha sua solicitação de cotação.</legend></div>
                        <br></br>
                        <div>
                            <label>Categoria: </label>
                            <select>
                                <OpcoesCategoriasComponente />
                            </select>
                        </div>
                        {/* <form action="salvar.html">
                            <fieldset>
                                Nome: <input type="text"> <br>
                                Login: <input type="text"> <br>
                                Senha: <input type="password"> <br>
                                <legend>Solicitações de cotação</legend>
                                Cotação:<textarea></textarea> <br>
                                <input type="reset" value="Limpar"> <br>
                                <input type="submit" value= "Enviar"> <br>
                            </fieldset>
                        </form> */}
                        <div width="100%">
                            <label>Cliente: </label>
                            <input
                                name="cliente"
                                type="text"
                                id="cliente"
                                placeholder="Digite aqui o cliente.">
                            </input>
                        </div>
                        <div width="100%">
                            <label>E-mail: </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="e-mail@e-mail.com">
                            </input>
                        </div>
                        <div width="100%">
                            <label>Telefone: </label>
                            <input
                                name="telefone"
                                type="tel"
                                id="telefone"
                                placeholder="(xx) xxxx-xxxx">
                            </input>
                        </div>
                        <div>
                           <label>Material: </label>
                            <input
                                name="material"
                                type="text"
                                id="material"
                                placeholder="Digite a descrição do material.">
                            </input>
                        </div>
                        <div>
                            <label>Quantidade: </label>
                            <input
                                name="data_entrega"
                                type="text"
                                id="material"
                                placeholder="Digite a descrição do material.">
                            </input>
                        </div>
                        <div>
                            <label>Data de entrega: </label>
                            <input
                                name="data_entrega"
                                type="text"
                                id="material"
                                placeholder="Digite a descrição do material.">
                            </input>
                        </div>
                        <div>
                            
                            <table border="0">
                                <tr bgcolor="gray">
                                    <th colspan="5">Solicitações de cotação</th>
                                </tr>
                                <tr bgcolor="#FFFFFF">
                                    <th>Categoria</th>
                                    <th>Cliente</th>
                                    <th>Material</th>
                                    <th>Qtde</th>
                                    <th>Ações</th>
                                </tr>
                                <tr bgcolor="#CCFFFF">
                                    <td>Material de escritório</td>
                                    <td>UN-BC/ATP/MRL</td>
                                    <td>Caneta BIC - azul</td>
                                    <td>10000</td>
                                </tr>
                                <tr bgcolor="#FFCCFF">
                                    <td>Material de informática</td>
                                    <td>BUZIOS/PRODUÇÃO</td>
                                    <td>Caneta BIC - vermelha</td>
                                    <td>100000</td>
                                </tr>
                                <tr bgcolor="#CCFFFF">
                                    <td>Rancho</td>
                                    <td>UN-ES/JUBARTE</td>
                                    <td>Pao de forma</td>
                                    <td>1000</td>
                                </tr>
                                <tr bgcolor="gray">
                                    <th colspan="5">Total de solicitações de cotação: 111</th>
                                </tr>
                            </table>
                        </div>

                        <div><button id="botao_enviar">Cadastrar</button></div>
                        {/* <div><button id="botao_enviar">Apagar</button></div> */}
                       </div>
                </div>
            </div>
            <div></div>
        </>
        );
}

export default ListaTarefas;