import { useState } from "react";

const FirstComponent = () => {
    
    const [apertou, setApertou] = useState(0);
    const [apertou2, setApertou2] = useState(0);
    
    function contar () {
        setApertou(apertou + 1);
    }

    const Renderizar = (x) => {
        if (x) {
            return <h1>Rendezirando true</h1>
        } else {
            return <h1>Renderizando false</h1>
        }
    };
    
    return(
        <>
            <div>
                <button onClick={contar}>
                    Fui apertado {apertou}
                </button>
                <button onClick={() => setApertou2(apertou2 + 1)} style = {{marginLeft:20}}>
                    Fui apertado {apertou2}
                </button>
                {/*
                    {Renderizar(true)}
                */}
            </div>
        </>
    );

}

export default FirstComponent