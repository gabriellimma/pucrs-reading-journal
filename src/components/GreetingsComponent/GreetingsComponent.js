import React from "react";

/**
 * componente que retorna mensagem de saudação
 * @param {{name: string, age: number, gender: string}} props
 * @returns component
 */
function GreetingsComponent(props) {

    let greeting = `Bem Vind${props.gender === 'M'
        ? 'o'
        : props.gender === 'F'
            ? 'a'
            : 'x'}`;
    return (
        <h2 className="App-header">
            <p>
                <b>{greeting}</b>, {props.name}
            </p>
            <p>
                idade: {props.age}
            </p>
            <p>
                gênero: {props.gender}
            </p>
        </h2>
    )
}

export default GreetingsComponent;