import { useState } from 'react'; 

export function Counter() { //uso de estado -- sempre tem que inciar o estado com o valor do tipo
    //da variavel
    //conceito de imutabilidade, o valor de counter não muda diretamente.
    const [counter, setCounter] = useState(0);
    
    //setando o valor do estado, ideia de criação de nova variavel
    function increment(){ //não pode usar count++
        setCounter(counter + 1);
    }
    
    return(
       <div>
           <h2>{counter}</h2>
              <button type="button" onClick={increment}>
               Increment
           </button>
       </div>
    );

}
