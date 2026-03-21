const CartaoPersonagem = (props) => {
  const progresso = ((props.nivel / 20) * 100);

  const getIcone = (classe) => {
    if (classe === 'Ninja') return 'user-ninja';
    if (classe === 'Atirador') return 'crosshairs';
    return 'question';
  }
  
  const icone = getIcone(props.classe)

  return (
    <div className="d-flex align-items-center card shadow text-center p-4 border-top border-danger border-5 mt-4">
      <i className={`fa-solid fa-3x fa-${icone}`}></i>
      <h3 className="fw-bold m-0">{props.nome || "Sem Nome"}</h3>
      <p className="text-muted">{props.classe || "Escolha uma classe"}</p>
      <h5 className="mt-2">Nível {props.nivel}</h5>
      <div className="progress mt-2 shadow-sm w-100" style={{ height: '25px', backgroundColor: '#e9ecef' }}>
        <div 
          className="progress-bar bg-danger fw-bold" 
          style={{ 
            width: `${progresso}%`, 
          }}
        >
          {progresso}%
        </div>
      </div>
      <small className="text-muted d-block mt-2 fw-bold">{props.nivel} / 20</small>
      <span className="text-muted italic mt-5" style={{ fontSize: '0.8rem' }}>
        O card atualiza em tempo real
      </span>
    </div>
  );
};

export default CartaoPersonagem;