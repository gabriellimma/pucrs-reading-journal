import React from "react";
import { useState } from "react";

function InnerComponent(props) {

    let [nroDeCliques, setNroDeCliques] = useState(0);

    return (
        <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logro" />
        <p>
          {props.message}
        </p>
        <button onClick={() => {
            alert(`botão clicado ${nroDeCliques}`)
            setNroDeCliques(nroDeCliques+1)
        }}>
            {props.btnMessage != null ? props.btnMessage : "Clique aqui"}
        </button>
      </header>
    )
}

export default InnerComponent;