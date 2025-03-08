import React from "react";

/**
 * componente que retorna mensagem de saudação
 * @param {{message: string}} props
 * @returns component
 */
function InicioComponent(props) {

    return (
        <header className="App-header">
            <h1 >
                {props.title}
            </h1>
            {props.paragraph ?
                <p>
                    {props.paragraph}
                </p> :
                <>
                </>
            }
        </header>
    )
}

export default InicioComponent;