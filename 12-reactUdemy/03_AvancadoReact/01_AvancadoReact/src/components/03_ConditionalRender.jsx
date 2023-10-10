import React, { useState } from 'react';

const ConditionalRender = () => {
  
    const [x] = useState(true);
    const y = "João";
  
    return (
    <div>
      {/*
        {x && <p>Isso vai ser exibido com X em true</p>}
        {!x && <p>Isso vai ser exibido com X em false</p>}
        {y === 'Joã' ? <p><b>Y</b> é verdadeiro</p> : <p><b>Y</b> é falso</p>}
      */}
        <div>
            {y === 'João' ? (
                <div>
                    <p><b>Y</b> é verdadeiro</p> 
                </div> 
            ): (
                <div>
                    <p><b>Y</b> é falso</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default ConditionalRender;
