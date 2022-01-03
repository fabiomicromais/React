import { useState } from  'react';

export function Soma () {
    const [incsoma, setIncsoma] = useState(0);

    function somar(){
        setIncsoma(incsoma+1);
    }

    return(
        <div>
            <button type="button" onClick={somar}>
             incrementaaaar - nfffo onclick não coloca o parenteses
            </button>
            <h3>{incsoma}</h3>
        </div>
    );

 }