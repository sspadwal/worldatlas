<<<<<<< HEAD
import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
};




export const getIndCountryData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
};
=======
import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
};




export const getIndCountryData = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
};
>>>>>>> fc009b3b17dafb591ed902dfa53cb35ee1b326f5
