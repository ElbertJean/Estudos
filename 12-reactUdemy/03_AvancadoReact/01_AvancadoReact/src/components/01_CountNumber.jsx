import React, { useState } from 'react';

const CountNumber = () => {
  
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Fui clicado {count}</button>
        </div>  
    )
}

export default CountNumber;
