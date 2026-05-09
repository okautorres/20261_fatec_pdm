import React, { Component } from "react";
import Busca from "./Busca";
import { createClient } from 'pexels';
import ListaImagens from "./ListaImagens";
import PexelsLogo from "./PexelsLogo";
import pexelsClient from "../utils/pexelsClient";

export default class App extends Component {

  state = {photos: []}

  onBuscaRealizada = (termoDeBusca) => {
    pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }
    }).then((result) => {
      this.setState({photos: result.data.photos})
    })
  }

  // client = null

  // client = createClient('');

  // onBuscaRealizada = (termoDeBusca) => {
  //   this.client.photos.search({
  //     query: termoDeBusca
  //   }).then((result) => {this.setState({photos: result.photos})})
  // };

  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-1">
        <div className="col-12">
          <PexelsLogo/>
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens photos = {this.state.photos}
            imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/>
          </div>
        </div>
      </div>
    );
  }
}
