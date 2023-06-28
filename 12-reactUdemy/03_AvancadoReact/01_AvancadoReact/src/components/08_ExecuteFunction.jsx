const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para ativar a função</button>
        <p id="teste"></p>
    </div>
  )
}

export default ExecuteFunction;
