import { useState, useEffect } from "react";

// 4 - Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - Refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false); //trazer os dados de volta

    //6 - loading
    const [loading, setLoading] = useState(false);

    //8 - Tratando erros
    const [error, setError] = useState (true);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            
            setLoading(true);

            try {
                const res = await fetch (url)
                const json = await res.json();

                setData(json);
            } catch(error) {
               setError(error.message); 
            }

            setLoading(false);
        }

        fetchData();

    }, [url, callFetch])

    //5- refatorando post
    useEffect(() => {

        const httpRequest = async () => {
            if(method ==="POST") {
                let fetchOptions = [url, config]
    
                const res = await fetch (...fetchOptions)
                const json = await res.json();
    
                setCallFetch(json);
            }
        }

        httpRequest();

    }, [config, method, url])

    return {data, httpConfig, loading, error};
    
}