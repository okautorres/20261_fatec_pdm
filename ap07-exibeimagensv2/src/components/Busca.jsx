import React, { Component } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class Busca extends Component {
  state = {
    termoDeBusca: "",
  };

  onTermoAlterado = (evento) => {
    this.setState({
      termoDeBusca: evento.target.value,
    });
  };

  onFormSubmit = (evento) => {
    evento.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column">
          <IconField iconPosition="left" className="mb-2">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
              placeholder="O que deseja ver ?"
              className="w-full"
              value={this.state.termoDeBusca}
              onChange={this.onTermoAlterado}
            />
          </IconField>
          <Button label="OK" className="p-button-outlined mt-2" />
        </div>
      </form>
    );
  }
}
