import React from "react";

/**
 * componente que retorna mensagem de saudação
 * @param {{message: string}} props
 * @returns component
 */
function TitleComponent(props) {

    return (
        <header className="App-header">
            <h1 id={props.titleID} style={{scrollMarginTop: "80px"}}>
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

export default TitleComponent;