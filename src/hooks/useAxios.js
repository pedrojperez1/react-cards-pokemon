import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";

const useAxios = (base_url) => {
    const [state, setState] = useState([]);
    const addData = async (suffix=false) => {
        let url;
        if (suffix) {
            url = `${base_url}${suffix}`
        } else {
            url = base_url;
        }
        console.log(`url: ${url}`);
        const response = await axios.get(url);
        setState(state => [...state, { ...response.data, id: uuid() }]);
    }
    return [state, addData];
};

export default useAxios;
