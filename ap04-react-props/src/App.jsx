import Pedido from "./Pedido";
import Cartao from "./Cartao";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <i className="fa solid fa-hippo fa-2x"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido icone="book" titulo="Livro" desc="Um bom livro" />
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              data="22/04/2024"
              icone="camera"
              titulo="Camera"
              desc="Camera 4K"
            />
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              data="22/04/2024"
              icone="bicycle"
              titulo="Bicicleta"
              desc="Bela bicicleta de 2 rodas"
            />
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              data="15/12/2025"
              icone="hippo"
              titulo="Hipopotamo"
              desc="Lindo hipopotamo"
            />
          </Cartao>
        </div>
      </div>
    </div>
  );
};

export default App;
