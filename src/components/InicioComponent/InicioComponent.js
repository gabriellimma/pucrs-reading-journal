import React from "react";

/**
 * componente que retorna mensagem de saudação
 * @param {{message: string}} props
 * @returns component
 */
function InicioComponent(props) {

    return (
        <h1 className="App-header">
                {props.message}
        </h1>
    )
}

export default InicioComponent;