import React from "react";

/**
 * componente que retorna mensagem de saudação
 * @param {{name: string, age: number, gender: string}} props
 * @returns component
 */
function GreetingsComponent(props) {

    let greeting = `Olá Professor`
    return (
        <h2 className="App-header">
            <p>
                <b>{greeting}</b>, {props.name}
            </p>
        </h2>
    )
}

export default GreetingsComponent;