import React, { useEffect, useState } from "react";
import axios from 'axios';

const PokePerfil = (url) =>{
    const [load, setLoad] = useState(true);
    const [state, setState] = useState({
        loading: true,
        data: null,
    });
    useEffect(() =>{
        getData();
    }, []);

    const getData = async () => {
        try { const res = await axios (url);

            setState({
                data: res.data,
                loading: false,
            });
            
        } catch (error) {setState({
            data: [],
            loading: false,

        })
            
        }
    }
    return(
        [state.data, state.loading]
    )
};
export default PokePerfil;