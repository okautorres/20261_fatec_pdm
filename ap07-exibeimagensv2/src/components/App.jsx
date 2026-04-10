import React, { Component } from "react";
import Busca from "./Busca";
import { createClient } from 'pexels';

export default class App extends Component {

  client = null

  client = createClient('api');

  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca);
  };

  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-1">
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
      </div>
    );
  }
}
