import axios from "axios";

// fetch()
export const fetchData = async() => {
    const response = await fetch('https://f91-plus.github.io/data/data.json');
    return response;
}
// axios()
export const axiosData = async() => {
    const response = await axios.get('https://f91-plus.github.io/data/data.json');
    return response;
}