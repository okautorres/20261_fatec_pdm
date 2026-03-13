const Feedback = (props) => {
  return (
    <div className="d-flex justify-content-evenly m-3">
        <button
        onClick={props.funcaoOK}
        type="button"
        className="btn btn-primary">
          {props.textoOK}
        </button>
        <button
         onClick={props.funcaoNOOK}
        type="button"
        className="btn btn-primary">
          {props.textoNOOK}
        </button>
    </div>
  )
}

export default Feedback