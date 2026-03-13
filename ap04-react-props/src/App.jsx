import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from "./Feedback";

const App = () => {
  const textoOK = 'Já chegou'
  const textoNOOK = 'Não chegou'
  const funcaoOK = () => alert('Obrigado pelo feedback')
  const funcaoNOOK = () => alert('Verificaremos')
  const componenteFeedback = (
    <Feedback
      textoOK = {textoOK}
      textoNOOK = {textoNOOK}
      funcaoOK = {funcaoOK}
      funcaoNOOK = {funcaoNOOK}/>)
  
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
            <Pedido 
              icone="book" 
              titulo="Livro" 
              desc="Um bom livro" />
              {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              data="22/04/2024"
              icone="camera"
              titulo="Camera"
              desc="Camera 4K"/>
              {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              data="22/04/2024"
              icone="bicycle"
              titulo="Bicicleta"
              desc="Bela bicicleta de 2 rodas"/>
              {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              data="15/12/2025"
              icone="hippo"
              titulo="Hipopotamo"
              desc="Lindo hipopotamo"/>
              {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  );
};

export default App;
