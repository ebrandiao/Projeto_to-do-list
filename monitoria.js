import React, { useState } from 'react'

export default () => {

    const [categorias, setCategorias] = useState(["categorias1", "categorias2"])
    const [categoriaInput, setCategoriaInput] = useState('')
    const categorias2 = []

        // categorias = ["categoria1", "categoria2", "categoria3"];
        // categorias.push("categorias");
        // setCategorias(categoria);

    return (
        <div>
            <div className="campo">
                <label for="categoria">Categoria</label>
                <select name="categoria">
                    { categorias.map( categoriaNome => <option>{ categoriaNome }</option> ) }
                </select>
            </div>

            <input type="text" value={ categoriaInput } onChange={ Event => setCategoriaInput ( Event.target.value ) }/>
            <button>Incluir</button>

            { categorias.map( categoriaNome => <p>{ categoriaNome }</p>) }

        </div>
    )
}