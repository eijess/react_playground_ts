import { useEffect, useState } from "react"

function Contador() {
  
  const[valor, setValor] = useState(0); // O estado se chama valor, a função que muda o estado se chama setValor
  
  function handleClick(){
    setValor(valor + 1); //chamando a função set responsável por mudar o estado, e pedindo pra ela pegar o valor atual e mudar adicionando 1
  }
  // console.log(valor); não deixar aparente na produção para não expor dados da aplicação no navegador

  return (
    <div>
      
      <h2>Componente Contador</h2>

      <p> O valor atual é: {valor}</p>

      <button onClick={handleClick}>Adicionar 1</button>

    </div>
  )
}

export default Contador