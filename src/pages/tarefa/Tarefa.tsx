import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false); /*criei uma função aônima (uma arrow function) dentro do evento onClick para usar o setCompleted sem precisar criar a função aqui em cima*/
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns, tarefa concluída!')
    }else{
      setTarefa('')
    }
  }, [completed]) //o useEffet só será executado se tiver uma alteração de estado no estado completed

  // console.log("Completed: " + completed);

  return (
    <div>
      
      <h2>Componente Tarefa</h2>

      <h3>{tarefa}</h3>

      <p>Conclua a tarefa</p>

      <button onClick={() => setCompleted(!completed)}>Concluir Tarefa</button> 
      
      </div>
  )
}

export default Tarefa