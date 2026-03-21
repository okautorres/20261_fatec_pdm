import './FormularioPersonagem.css'

const FormularioPersonagem = (props) => {

    return(
        <div className="card p-4 shadow-sm">
            <div className="mt-3">
                <label className="form-label fs-5">
                    Nome do Personagem
                </label>
                <input 
                    type="text" 
                    className="form-control fs-5"
                    value={props.nome}
                    onChange={(evento) => props.setNome(evento.target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="form-label fs-5">Classe</label>
                <select className="form-select fs-5"
                value={props.classe}
                onChange={(evento) => props.setClasse(evento.target.value)}>
                    <option>Escolha sua classe</option>
                    <option value="Ninja">Ninja</option>
                    <option value="Atirador">Atirador</option>
                </select>
            </div>

            <div className="mt-3">
                <label className="form-label fs-5">Nível</label>
                <div className="d-flex  gap-2 align-items-center">
                    <button className="btn btn-outline-secondary px-3 py-1 fs-5 botao"
                    onClick={() => { if(props.nivel > 1)
                        props.setNivel(props.nivel - 1)}}
                    >-
                    </button>
                    <span className="fs-5 fw-bold border px-3 py-1 rounded">{props.nivel}</span>
                    <button className="btn btn-outline-secondary px-3 py-1 fs-5 botao"
                    onClick={() => { if(props.nivel < 20)
                        props.setNivel(props.nivel + 1)}}>
                        +
                    </button>
                    <span className="ms-3">(1 a 20)</span>
                </div>
            </div>
        </div>
    )
}

export default FormularioPersonagem