import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = (url) => {
    

    const [state, setState] = useState ({
        loading: true,
        error: null,
        data: null,
    });

    useEffect ( () => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios (url);

            setState({
                data: res.data.results,
                error:null,
                loading: false,
            });
        } catch (error) {
            setState({
                data: [],
                error: error,
                loading: false,

            })
            
        }
       
    };

    

    return [state.data, state.loading, state.error];
};

export default useGetData;